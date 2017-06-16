import 'isomorphic-fetch'

const get = url => {
  return fetch(url, {
    method: 'get'
  })
}

const getJSON = url => {
  return get(url).then(function (response) {
    return response.json()
  })
}

module.exports = {
  get,
  getJSON
}
