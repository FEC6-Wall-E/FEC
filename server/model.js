//Integrate API Access
const axios = require('axios')

const headers = {
  'Authorization': process.env.AUTH_KEY,
  'Content': 'application/json'
}
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/'

module.exports = {
  get: (extension) => {
    return axios({
      method: 'GET',
      url: url + extension,
      headers: headers
    })
  },
  post: (extension, data) => {
    console.log('DATA: ', data)
    return axios({
      method: 'POST',
      url: url + extension,
      data: data,
      headers: headers
    })
  },
  put: (extension) => {
    const config = {
      method: 'PUT',
      url: url + extension,
      headers: headers
    }
    console.log('CONFIG: ', config)
    return axios(config)
  }
}
