import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import ThumbnailsList from './ThumbnailsList.jsx';
import averageRating from '../sharedComponents/lib/averageRating.js';
// import StarRating from '../sharedComponents/StarRating.jsx';

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const ProductCard = forwardRef(function ProductCard({ productId, index, idx }, ref) {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [defaultStyle, setDefaultStyle] = useState({});
  // const [rating, setRating] = useState([]);
  const [images, setImages] = useState([]);
  const [mainImg, setMainImg] = useState('');

  const getRating = () => {
    if (productId) {
      axios.get(`/meta/${productId}`)
        .then((meta) => {
          console.log(meta);
          // setRating(averageRating(meta));
        })
        .catch((err) => console.error(err));
    }
  };

  // get default style for the current related product (needed for images and price)
  const getStyles = () => {
    axios.get(`/products/${productId}/styles`)
      .then((product) => {
        const defaultStyles = product.data.results.filter((style) => style['default?']);
        const newDefaultStyle = defaultStyles.length > 0
          ? defaultStyles[0] : product.data.results[0];
        setDefaultStyle(newDefaultStyle);

        if (newDefaultStyle.photos[0].thumbnail_url !== null) {
          setImages(newDefaultStyle.photos);
        } else {
          setImages([{
            thumbnail_url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
            url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
          }]);
        }
      })
      .catch((err) => console.error(err));
  };

  // get info for the current related product (needed for )
  const getRelatedProduct = () => {
    axios.get(`/products/${productId}`)
      .then((product) => {
        setRelatedProduct(product.data);
        // getRating();
      })
      .catch((err) => console.error(err))
      .then(() => getStyles());
  };

  useEffect(() => {
    if (productId) {
      getRelatedProduct();
    }
    // getStyles();
  }, [productId]);

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(images[0].thumbnail_url);
    }
  }, [images]);

  // const handleNavigate = () => {
  //   setProduct(productId);
  // };

  return (
    // add onClick={handleNavigate} to the first div
    <div
      className={index === idx ? 'active product-card' : 'product-card'}
      ref={index === idx ? ref : null}
    >
      <img className="mainImg" src={mainImg} alt="Missing" />
      <ThumbnailsList images={images} setMainImg={setMainImg} />
      {/* add onClick={handleCompare} to the button */}
      <button className="compare">Compare</button>
      <div className="category">{relatedProduct.category}</div>
      <h4 className="product-name">{relatedProduct.name}</h4>
      {defaultStyle.sale_price
        ? (
          <div className="price">
            <span className="sale">
              {`$${defaultStyle.sale_price}`}
            </span>
            <span className="struckthrough">
              {`$${defaultStyle.original_price}`}
            </span>
          </div>
        )
        : (
          <div className="price default">
            {`$${defaultStyle.original_price}`}
          </div>
        )}
      <span className="rating">
        {/* <StarRating rating={rating[0]} count={rating[1]} link={}/> */}
      </span>
    </div>
  );
});

export default ProductCard;
