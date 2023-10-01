const express = require('express')
const path = require('path')

const app = express()

app.use('/data-country', require('./routes/country'))

const PORT = process.env.PORT || 5005

app.listen(PORT, () => console.log(`Covid19 Data API running on port ${PORT}`))
