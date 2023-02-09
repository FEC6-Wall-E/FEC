/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export default {
  getQuestionsByID: (productId) => {
    const inputs = {
      method: 'get',
      url: `/qa/questions?product_id=${productId}&page=1&count=200`,
    };
    return axios(inputs);
  },
  postQuestion: (body, name, email, product_id) => {
    const inputs = {
      method: 'post',
      url: '/qa/questions',
      data: {
        body,
        name,
        email,
        product_id,
      },
    };
    return axios(inputs);
  },
  postAnswer: (body, name, email, photos, productId) => {
    const inputs = {
      method: 'post',
      url: `/qa/questions/${productId}/answers?${productId}`,
      data: {
        body,
        name,
        email,
        photos,
      },
    };
    return axios(inputs);
  },
  putQHelpful: (productId) => {
    const inputs = {
      method: 'put',
      url: `/qa/questions/${productId}/helpful`,
    };
    return axios(inputs);
  },
  putAHelpful: (productId) => {
    const inputs = {
      method: 'put',
      url: `/qa/answers/${productId}/helpful`,
    };
    return axios(inputs);
  },
  putAReport: (productId) => {
    const inputs = {
      method: 'put',
      url: `/qa/answers/${productId}/report`,
    };
    return axios(inputs);
  },
};
