import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThumbnailsList from './ThumbnailsList.jsx';
import { forwardRef } from 'react';

const ProductCard = forwardRef(function ProductCard({ productId, index, idx }, ref) { //add setProduct
  console.log('index ', index);
  console.log('idx', idx);
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
  const [images, setImages] = useState([]);
  const [mainImg, setMainImg] = useState('');

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
        .then(() => getStyles());
    }
  };

  //get default style for the current related product (needed for images and price)
  const getStyles = () => {
    if (productId) {  //had to add the condition for initial render when no
      //productId was provided; adjust when change useEffect
      //dependencies
      axios.get(`/products/${productId}/styles`)
        .then((product) => {
          const defaultStyles = product.data.results.filter((style) => style['default?']);
          let newDefaultStyle;
          if (defaultStyles.length > 0) {
            newDefaultStyle = defaultStyles[0];
          } else { //if no default style
            newDefaultStyle = product.data.results[0];//product.data.results.filter((style) => style.photos[0].thumbnail_url !== null)[0]; //assign to data that has some images ?
          }
          setDefaultStyle(newDefaultStyle);
          if (newDefaultStyle.photos[0].thumbnail_url !== null) {
            setImages(newDefaultStyle.photos);
            setMainImg(newDefaultStyle.photos[0].thumbnail_url);
          } else {
            setImages([{
              thumbnail_url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
              url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
            }]);
            setMainImg('https://www.freeiconspng.com/uploads/no-image-icon-6.png');
          }
          // if (newDefaultStyle.photos[0].thumbnail_url === null)
          // if (defaultStyles.photos[0].thumbnail_url === null) {
          //   const newImgs = product.data.results.filter((style) => style.photos[0].thumbnail_url !== null)[0];
          //   setImages(newImgs);
          // } else {
          //   setImages(defaultStyles.photos);
          // }
          // //   setImages(defaultStyles.photos)
          // }
        })
        .catch((err) => console.error(err));
    }
  };
  // const findImgs = (styles) => {
  //   const stylesWithImgs = styles.filter((style) => style.photos[0].thumbnail_url !== null);
  //   if (stylesWithImgs.length) {
  //     return stylesWithImgs;
  //   }
  // }
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
  };

  useEffect(() => {
    getRelatedProduct();
    // getDefaultRelatedProduct();
  }, []);

  // const handleNavigate = () => {
  //   setProduct(productId);
  // };

  return (
    // add onClick={handleNavigate} to the first div
    <div className={index === idx ? 'active product-card' : 'product-card'} ref={index === idx ? ref : null}>
      {/* {
        !defaultStyle.photos[0].thumbnail_url
        ?
        <img className="mainImg" src='https://www.freeiconspng.com/uploads/no-image-icon-6.png'/>
        :
        <img className="mainImg" src={`${defaultStyle.photos[0].thumbnail_url}`}/>
      } */}
      <img className="mainImg" src={mainImg} />
      <ThumbnailsList images={images} setMainImg={setMainImg} />
      {/* add onClick={handleCompare} to the button*/}
      <button className="compare">Compare</button>
      <div className="category">{relatedProduct.category}</div>
      <h4 className="product-name">{relatedProduct.name}</h4>
      {/* do we want to have decimal point and decimals for price? */}
      {
        defaultStyle.sale_price
          ?
          <div className="price">
            <span className="sale"> {`$${defaultStyle.sale_price}`}</span>
            <span className="struckthrough">{`$${defaultStyle.original_price}`}</span>
          </div>
          :
          <div className="price default">{`$${defaultStyle.original_price}`}</div>
      }
      <span className="rating">Rating:{rating}</span>
    </div>
  );
});

export default ProductCard;
