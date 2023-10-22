const express = require('express')
const router = express.Router()
const { countryList } = require('../countries/countryList')

//GET /countries
//Get list of countries: name, slug, iso2 & iso3 names, population
router.get('/', async (req, res) => {
  try {
    res.send(countryList)
  } catch (error) {
    console.error(error.msg)
    res.status(500).send('Server error')
  }
})

module.exports = router
