const express = require('express')
const { logCounter } = require('./middleware/logCounter')
const { dateTime } = require('./utils/dateTime')

const app = express()

app.use('/covid19-data/countries', logCounter, require('./routes/countries'))
app.use('/covid19-data/country', logCounter, require('./routes/data'))

const PORT = process.env.PORT || 5012
app.listen(PORT, () =>
  console.log(`${dateTime()} Covid19 Data API running on port ${PORT}`)
)
