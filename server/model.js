//Integrate API Access
const axios = require('axios')

const headers = {
  'Authorization': process.env.AUTH_KEY
}

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

module.exports = {
  get: (extension) => {
    console.log(extension);
    return axios({
      method: 'GET',
      url: url + extension,
      headers: headers
    })
  },
  post: (url, data) => {
    return axios({
      method: 'POST',
      url: url,
      data: data,
      headers: headers
    })
  },
  put: (url, data) => {
    return axios({
      method: 'PUT',
      url: url,
      headers: headers
    })
  }
}