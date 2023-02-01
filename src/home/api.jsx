import React from 'react'

export function api() {
    const axios = require('axios');
    axios.get('http://api.weatherapi.com/v1?key=0a815a221c564add81e05849233101&&q=Sydney')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
