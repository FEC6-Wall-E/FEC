/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export default {
  getQuestionsByID: (productId) => {
    const config = {
      method: 'get',
      url: `/qa/questions?product_id=${productId}&page=1&count=200`,
    };
    return axios(config);
  },
  postQuestion: (body, name, email, product_id) => {
    const config = {
      method: 'post',
      url: '/qa/questions',
      data: {
        body,
        name,
        email,
        product_id,
      },
    };
    return axios(config);
  },
  postAnswer: (body, name, email, photos, productId) => {
    const config = {
      method: 'post',
      url: `/qa/questions/${productId}/answers?${productId}`,
      data: {
        body,
        name,
        email,
        photos,
      },
    };
    return axios(config);
  },
  postImage: (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'rcynzrha');
    return axios.post('https://api.cloudinary.com/v1_1/dw5uya9rf/image/upload', formData);
  },
  putQHelpful: (productId) => {
    const config = {
      method: 'put',
      url: `/qa/questions/${productId}/helpful`,
    };
    return axios(config);
  },
  putAHelpful: (productId) => {
    const config = {
      method: 'put',
      url: `/qa/answers/${productId}/helpful`,
    };
    return axios(config);
  },
  putAReport: (productId) => {
    const config = {
      method: 'put',
      url: `/qa/answers/${productId}/report`,
    };
    return axios(config);
  },
};
