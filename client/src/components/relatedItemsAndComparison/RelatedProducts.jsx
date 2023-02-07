import React from 'react';
import Carousel from './Carousel.jsx';

function RelatedProducts({ relatedList }) {
  return (
    <section id="related-products">
      <h5 data-testid="heading">RELATED PRODUCTS</h5>
      {relatedList.length ? (
        <Carousel items={relatedList} classname="product-card" />)
        : <div data-testid="loading">Loading</div>}
    </section>
  );
}

export default RelatedProducts;
