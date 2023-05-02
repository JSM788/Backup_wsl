#!/usr/bin/node

const axios = require('axios');
const arg = process.argv[2];

axios.get(`https://swapi-api.hbtn.io/api/films/${arg}`)
  .then((response) => {
    console.log(response.data.title);
  });
