//Integrate API Access
const axios = require('axios')

const headers = {
  'Authorization': process.env.AUTH;
}

module.exports = {
  get: url => {
    return axios({
      method: 'GET',
      url: url,
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