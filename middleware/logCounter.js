const { dateTime } = require('../utils')

function logCounter(req, res, next) {
  console.log(`${dateTime()} ${req.originalUrl}`)
  next()
}

module.exports = { logCounter }
