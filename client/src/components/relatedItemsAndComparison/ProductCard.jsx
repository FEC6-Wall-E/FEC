import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { IoIosStarOutline } from 'react-icons/io';
import averageRating from '../sharedComponents/lib/averageRating.js';
import StarRating from '../sharedComponents/StarRating.jsx';
import CompareModal from './CompareModal.jsx';
import Carousel from './Carousel.jsx';
import Price from '../overview/info/price.jsx';

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

  useEffect(() => {
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
        .catch((err) => console.error(err));
    };
    getRelatedProductData();
  }, [relatedProductId]);

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(images[0].url);
    }
  }, [images]);

  return (
    // add onClick={handleNavigate} to the first div
    <div
      className={index === idx ? 'active product-card' : 'product-card'}
      ref={index === idx ? ref : null}
    >
      <div className="images">
        <img className="mainImg" src={mainImg} alt="Missing" />
        <Carousel items={images} classname="thumbnail" setMainImg={setMainImg} />
      </div>
      <IoIosStarOutline className="compare" onClick={() => setShowModal(true)} />
      {showModal && <CompareModal product2={relatedProduct} setShowModal={setShowModal} />}
      <div className="category">{relatedProduct.category}</div>
      <div className="product-name">{relatedProduct.name}</div>
      <Price sale={defaultStyle.sale_price} original={defaultStyle.original_price} />
      <StarRating rating={rating.averageRating} count={rating.ratings} />
    </div>
  );
});

export default ProductCard;
