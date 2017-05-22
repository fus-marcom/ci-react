/* jshint esversion: 6 */
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
let cacheTime = 1000 * 60 * 60; //1 hour

if (dev) {
  cacheTime = 100;
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
})

app.prepare()
.then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/news', (req, res) => {
    renderAndCache(req, res, '/news')
  })

  server.get('/news/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/single-news', queryParams)
  })

  server.get('/search/*', (req, res) => {
    renderAndCache(req, res, '/search')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  if (dev) {
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  } else {
    server.listen(8080, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8080')
    })
  }

})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
