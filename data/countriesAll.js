let allCountryData = {}

const theAlphabet = [...Array(26).keys()].map((n) =>
  String.fromCharCode(65 + n)
)

theAlphabet.forEach((letter) => {
  const countriesX = require(`./countries-${letter.toLowerCase()}`)[
    `countries${letter}`
  ]
  allCountryData = { ...allCountryData, ...countriesX }
})

exports.data = allCountryData
