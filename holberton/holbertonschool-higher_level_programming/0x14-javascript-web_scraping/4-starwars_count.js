#!/usr/bin/node

const axios = require('axios');

axios.get(process.argv[2]).then(
  (response) => {
    const url = response.data.results
      .filter(element => element.characters
        .find(elemen => elemen.includes(18)));
    const len = url.length;
    console.log(len);
  });
