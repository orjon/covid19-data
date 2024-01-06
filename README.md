# Covid-19 Data API

</br>
This API serves static global country Covid 19 data. The purpose of this API is to replace an API that is no longer available - rendering my Covid19 Tracker App unusable
</br></br>

## Configuration


## Endpoints

| Endpoint | Description |
|----------|-------------|
| `/covid19-data/countries`| Returns array of all available countries. For each country the folloeing fields are given: `country`, `slug`, `iso2`, `iso3`, `population`.
| `/covid19-data/data/[countrySlug]`| Returns array of covid data for given country
</br></br>

## Data format

### Country List:

```
country: 'Afghanistan',
slug: 'afghanistan',
iso2: 'AF',
iso3: 'AFG',
population: 38928341
```

### Covid Data

```
[
  ...
  {
    date: '2021-07-23',
    casesTotal: 115009,
    casesNew: 609,
    deathsTotal: 2714,
    deathsNew: 49
  },
  ...
]
```
</br></br>
## To Run
server: `covid19-data.js`<br>
development server: `nodemon covid19-data`