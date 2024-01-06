const express = require('express')
const { logCounter } = require('./middleware/logCounter')
const { logMessage } = require('./utils')
const { port, apiUrl } = require('./config')

const app = express()

app.use(`/${apiUrl}/countries`, logCounter, require('./routes/countries'))
app.use(`/${apiUrl}/country`, logCounter, require('./routes/data'))

app.listen(port, () => {
  logMessage(`Covid19 Data API running on port ${port}`)
  logMessage(`Country list: /${apiUrl}/countries`)
  logMessage(`Country data: /${apiUrl}/country/[country-slug]`)
})
