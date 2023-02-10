/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import { IoIosStarOutline } from 'react-icons/io';
import averageRating from '../sharedComponents/lib/averageRating.js';
import StarRating from '../sharedComponents/StarRating.jsx';
import CompareModal from './CompareModal.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import Price from '../overview/info/price.jsx';

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const ProductCard = forwardRef(function ProductCard({
  productId, mainProduct, index, idx, theme, classname, deleteOutfit, setPid,
}, ref) {
  const [product, setProduct] = useState({});
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
      if (productId) {
        axios.get(`/meta/${productId}`)
          .then((meta) => {
            setRating(averageRating(meta.data));
          })
          .catch((err) => console.error(err));
      }
    };

    const getStyles = () => {
      axios.get(`/products/${productId}/styles`)
        .then((item) => {
          const defaultStyles = item.data.results.filter((style) => style['default?']);
          const newDefaultStyle = defaultStyles.length > 0
            ? defaultStyles[0] : item.data.results[0];
          setDefaultStyle(newDefaultStyle);

          if (newDefaultStyle.photos[0].thumbnail_url !== null) {
            setImages(newDefaultStyle.photos);
          }
        })
        .catch((err) => console.error(err));
    };

    const getProductData = () => {
      axios.get(`/products/${productId}`)
        .then((item) => {
          setProduct(item.data);
          getRating();
          getStyles();
        })
        .catch((err) => console.error(err));
    };
    getProductData();
  }, [productId]);

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(images[0].url);
    }
  }, [images]);

  const changeProduct = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.replace(`${window.location.href.substr(0, window.location.href.length - 5)}${productId}`);
    setPid(productId);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={index === idx ? `active product-card ${theme}` : `product-card ${theme}`}
      ref={index === idx ? ref : null}
      data-testid="slider-product-card"
    >
      <div className={`images ${theme}`}>
        <img data-testid="main-image" className={`mainImg ${theme}`} src={mainImg} alt="Missing" onClick={() => changeProduct()} />
        <ThumbnailCarousel items={images} theme={theme} setMainImg={setMainImg} />
      </div>
      {classname === 'product-card'
        ? (
          <div
            className={`compare ${theme}`}
            onClick={() => setShowModal(true)}
            role="button"
            data-testid="open-compare"
          >
            <IoIosStarOutline />
          </div>
        )
        : (
          <div
            className={`delete ${theme}`}
            onClick={() => deleteOutfit(productId)}
            role="button"
            data-testid="delete-outfit"
          >
            &times;
          </div>
        )}
      {showModal && (
      <CompareModal
        theme={theme}
        product1={mainProduct}
        product2={product}
        setShowModal={setShowModal}
      />
      )}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="product-card-details" onClick={() => changeProduct()}>
        <div data-testid="category" className={`category ${theme}`}>{product.category}</div>
        <div data-testid="product-name" className={`product-name ${theme}`}>{product.name}</div>
        <Price
          theme="light"
          sale={defaultStyle.sale_price}
          original={defaultStyle.original_price}
        />
        <StarRating theme={theme} rating={rating.averageRating} count={rating.ratings} />
      </div>
    </div>
  );
});

export default ProductCard;
