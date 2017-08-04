const decode = str => {
  return str.replace(/&amp;/gi, '&')
}

module.exports = {
  decode
}
