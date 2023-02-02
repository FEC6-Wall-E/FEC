import axios from 'axios';
import averageRating from './components/sharedComponents/lib/averageRating.js';

export const API = {
  getRating: (productId) => {
    axios.get(`/meta/${productId}`)
      .then((meta) => {
        return averageRating(meta.data);
      })
      .catch((err) => console.error(err));
  },

  getRelatedProduct: (productId) => {
    axios.get(`/products/${productId}`)
      .then((product) => {
        return product.data
      })
      .catch((err) => console.error(err))
  },

  getStyles: (productId) => {
    axios.get(`/products/${productId}/styles`)
      .then((product) => {
        const defaultStyles = product.data.results.filter((style) => style['default?']);
        const newDefaultStyle = defaultStyles.length > 0
          ? defaultStyles[0] : product.data.results[0];
        return newDefaultStyle;
      })
      .catch((err) => console.error(err));
  }
}

// export default API;