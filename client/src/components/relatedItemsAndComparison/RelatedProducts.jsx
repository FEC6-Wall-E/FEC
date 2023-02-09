import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import handleInteraction from '../../handleInteraction.js';

function RelatedProducts() {
  // props that are passed in are {product} or {productId},
  // {setProductId} for re-rendering the page when a card is clicked
  const [relatedList, setRelatedList] = useState([]);
  // hard coded for now
  const pid = 40346;

  const getRelatedProducts = () => {
    // change pid to product.id when you actually start passing the props
    axios.get(`/products/${pid}/related`)
      .then((products) => {
        // are we sure that every product has a related product ?
        setRelatedList(products.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRelatedProducts();
  }, []);

  return (
    <section onClick={(e) => handleInteraction(e, 'RELATED')} id="related-products">
      <h5>RELATED PRODUCTS</h5>
      <div className="slider-container">
        <Carousel relatedList={relatedList} />
      </div>
    </section>
  );
}

export default RelatedProducts;
