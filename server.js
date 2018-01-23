/* jshint esversion: 6 */
require('dotenv').config()
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const formidable = require('formidable')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const xssFilters = require('xss-filters')
const HOSTNAME = process.env.HOST || 'localhost'
const PROTOCOL = process.env.PROTOCOL || 'http'

const CORS =
  process.env.NODE_ENV === 'production' ? `${PROTOCOL}://${HOSTNAME}` : `*`

const ENABLE_SEND_EMAILS =
  process.env.NODE_ENV === 'production' ||
  process.env.ENABLE_SEND_EMAILS === 'true'

if (ENABLE_SEND_EMAILS) {
  console.info('Sending emails is enabled')
} else {
  console.info('Sending emails is disabled')
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
let cacheTime = 1000 * 60 * 60 // 1 hour

if (dev) {
  cacheTime = 100
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
})

app.prepare().then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  // Handle mentor form submissions
  server.post('/mentor-form', function (req, res) {
    const form = new formidable.IncomingForm()
    // In any case send the cors headers (even on error)
    res.header('Access-Control-Allow-Origin', CORS)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )

    form.parse(req)

    const fields = {}
    let fieldsString = ''
    form.on('field', (name, value) => {
      fields[name] = value
      fieldsString =
        fieldsString +
        `<span><span style='text-transform: capitalize;'>${xssFilters.inHTMLData(
          name
        )}</span>: ${xssFilters.inHTMLData(value)}</span><br /><br />`
    })

    // Handle a possible error while parsing the request
    // We need a variable in this scope to hold whether there was an error
    // because we need to know that in a different callback
    let error = false
    form.on('error', err => {
      error = true
      console.log('Error while parsing request to /mentor-form: ' + err)
      res
        .status(400) // Bad request
        .json({ success: false, status: 'Error parsing the request' })
    })

    form.on('end', () => {
      // The end event is fired even if an error occurs, so we
      // need to prevent from sending a second response, otherwise the
      // server crashes
      if (error) return
      console.log('Received fields:\n' + JSON.stringify(fields, null, 2))
      console.log(fieldsString)

      const emailBody = `Thank you for your submission!<br /><br />${fieldsString}`

      // Here is a good place to send the emails since we have the fields
      // We don't want to actually send emails during testing since it
      // would send a test email on every single commit
      if (ENABLE_SEND_EMAILS) {
        const msg = {
          to: fields.email,
          bcc:
            process.env.NODE_ENV === 'production'
              ? ['jweigel@franciscan.edu', process.env.STORY_EMAIL1]
              : 'jweigel@franciscan.edu',
          from: 'catechetics@franciscan.edu',
          replyTo: 'catechetics@franciscan.edu',
          subject: 'Mentor Training Form Submission',
          text: 'Mentor training submitted successfully!',
          html: emailBody
        }
        sgMail
          .send(msg)
          .then(() => console.log('Mail sent successfully'))
          .catch(error => console.error(error.toString()))
      }

      // Send the success response
      res
        .status(200)
        .json({ success: true, status: 'Form successfully submitted' })
    })
  })

  server.get('/events/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/single-event', queryParams)
  })

  server.get('/news', (req, res) => {
    renderAndCache(req, res, '/news')
  })

  server.get('/news/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/single-news', queryParams)
  })

  server.get('/i/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/pdf-page', queryParams)
  })

  server.get('/search/*', (req, res) => {
    renderAndCache(req, res, '/search')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  if (dev) {
    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  } else {
    server.listen(8080, err => {
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
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
