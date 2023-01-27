import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCard({ productId }) {
  const initialDefault = {
    name: '',
    'default?': true,
    original_price: '',
    photos: [{
      thumbnail_url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
      url: '',
    }],
    sale_price: null,
    skus: {},
    style_id: '',
  };

  const [relatedProduct, setRelatedProduct] = useState({});
  const [defaultStyle, setDefaultStyle] = useState(initialDefault);
  const [rating, setRating] = useState(0);

  // get info for the current related product (needed for )
  const getRelatedProduct = () => {
    if (productId) { //had to add the condition for initial render when no
                     //productId was provided; adjust when change useEffect
                     //dependencies
      axios.get(`/products/${productId}`)
        .then((product) => {
          setRelatedProduct(product.data);
          getRating();
        })
        .catch((err) => console.error(err))
        .then(() => getDefaultStyles());
    }
  };

  //get default style for the current related product (needed for images and price)
  const getDefaultStyles = () => {
    if (productId) {  //had to add the condition for initial render when no
                      //productId was provided; adjust when change useEffect
                      //dependencies
      axios.get(`/products/${productId}/styles`)
      .then((product) => {
        const defaultStyles = product.data.results.filter((defaultStyle) => defaultStyle['default?']);
          if (defaultStyles.length > 0) {
            setDefaultStyle(defaultStyles[0]);
          } else {
            setDefaultStyle(product.data.results[0]);
          }
      })
      .catch((err) => console.error(err));
    }
  };

  const getRating = () => {
    if (productId) { //had to add the condition for initial render when no
                     //productId was provided; adjust when change useEffect
                     //dependencies
      axios.get(`/meta/${productId}`)
        .then((meta) => {
          setRating(calculateRating(meta.data.ratings));
        })
        .catch((err) => console.error(err))
    }
  };

  const calculateRating = (data) => {
    var ratings = Object.values(data);
    var dividend = ratings.reduce((accumulator, currentValue, currentIndex) => accumulator + +currentValue * (currentIndex + 1), 0);
    var divisor = ratings.reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
    return Math.round(dividend / divisor * 10) / 10;
  }

  useEffect(() => {
    getRelatedProduct();
    // getDefaultRelatedProduct();
  }, []);

  return (
    <div>
      {
        !defaultStyle.photos[0].thumbnail_url
        ?
          <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png'/>
        :
        <img src={`${defaultStyle.photos[0].thumbnail_url}`}/>
       }
      <h4>{relatedProduct.name}</h4>
      <div className="category">{relatedProduct.category}</div>
      {
        defaultStyle.sale_price
        ?
        <div className="price">
          <span className="sale"> {`$${defaultStyle.sale_price} `} </span>
          <span className="struckthrough"> {`$${defaultStyle.original_price}`} </span>
          </div> //do we want to have decimal point and decimals?
        :
        <div className="price default">{`$${defaultStyle.original_price}`}</div> //do we want to have decimal point and decimals?
      }

      Rating:{rating}
    </div>
  );
}

export default ProductCard;
