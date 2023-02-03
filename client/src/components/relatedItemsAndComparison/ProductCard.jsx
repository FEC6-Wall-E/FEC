import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { API } from '../.././api.js';
import ThumbnailsList from './ThumbnailsList.jsx';
import averageRating from '../sharedComponents/lib/averageRating.js';
import StarRating from '../sharedComponents/StarRating.jsx';
import CompareModal from './CompareModal.jsx'

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const ProductCard = forwardRef(function ProductCard({ relatedProductId, index, idx }, ref) {
  const [relatedProduct, setRelatedProduct] = useState({});
  const [defaultStyle, setDefaultStyle] = useState({});
  const [rating, setRating] = useState({});
  const [images, setImages] = useState([{
    thumbnail_url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
    url: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
  }]);
  const [mainImg, setMainImg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getRating = () => {
    if (relatedProductId) {
      axios.get(`/meta/${relatedProductId}`)
        .then((meta) => {
          setRating(averageRating(meta.data));
        })
        .catch((err) => console.error(err));
    }
  };

  // get default style for the current related product (needed for images and price)
  const getStyles = () => {
    axios.get(`/products/${relatedProductId}/styles`)
      .then((product) => {
        const defaultStyles = product.data.results.filter((style) => style['default?']);
        const newDefaultStyle = defaultStyles.length > 0
          ? defaultStyles[0] : product.data.results[0];
        setDefaultStyle(newDefaultStyle);

        if (newDefaultStyle.photos[0].thumbnail_url !== null) {
          setImages(newDefaultStyle.photos);
        }
      })
      .catch((err) => console.error(err));
  };

  // get info for the current related product (needed for )
  const getRelatedProductData = () => {
    axios.get(`/products/${relatedProductId}`)
      .then((product) => {
        setRelatedProduct(product.data);
        getRating();
        getStyles();

      })
      .catch((err) => console.error(err))
  };

  useEffect(() => {
    if (relatedProductId) {
      getRelatedProductData();
    }
  }, [relatedProductId]);

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(images[0].thumbnail_url);
    }
  }, [images]);

  return (
    // add onClick={handleNavigate} to the first div
    <div
      className={index === idx ? 'active product-card' : 'product-card'}
      ref={index === idx ? ref : null}
    >
      <img className="mainImg" src={mainImg} alt="Missing" />
      <ThumbnailsList images={images} setMainImg={setMainImg} />
      {/* add onClick={handleCompare} to the button */}
      <button className="compare" onClick={() => setShowModal(true)}>Compare</button>
      {showModal && <CompareModal product2={relatedProduct} setShowModal={setShowModal} />}
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
        <StarRating rating={rating.averageRating} count={rating.ratings} />
      </span>
    </div>
  );
});

export default ProductCard;