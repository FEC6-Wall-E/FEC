const axios = require('axios');

const headers = {
  Authorization: process.env.AUTH_KEY,
  Content: 'application/json',
};
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

module.exports = {
  get: (extension) => {
    const config = {
      method: 'GET',
      url: url + extension,
      headers,
    };
    return axios(config);
  },
  post: (extension, data) => {
    const config = {
      method: 'POST',
      url: url + extension,
      data,
      headers,
    };
    return axios(config);
  },
  put: (extension) => {
    const config = {
      method: 'PUT',
      url: url + extension,
      headers,
    };
    return axios(config);
  },
};
