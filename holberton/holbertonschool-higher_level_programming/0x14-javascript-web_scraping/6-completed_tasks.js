#!/usr/bin/node

const axios = require('axios');

axios.get(process.argv[2]).then(
  (response) => {
    const dic = {};
    response.data.forEach((index) => {
      if (index.completed === true) {
        if (dic[index.userId] === undefined) {
          dic[index.userId] = 1;
        } else {
          dic[index.userId] += 1;
        }
      }
    });
    console.log(dic);
  });
