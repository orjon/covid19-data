const express = require('express')
const router = express.Router()
const { data } = require('../data/countriesAll')

// GET /data/:country
// get data for country
router.get('/:countrySlug', async (req, res) => {
  try {
    res.json(data[req.params.countrySlug] || false)
  } catch (error) {
    console.error(error.msg)
    res.status(500).send('Server error')
  }
})

module.exports = router
