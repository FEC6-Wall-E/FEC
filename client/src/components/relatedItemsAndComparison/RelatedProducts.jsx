import React from 'react';
import Carousel from './Carousel.jsx';

function RelatedProducts({ relatedList, theme }) {
  return (
    <section id="related-products">
      <h5 data-testid="heading" className={theme}>RELATED PRODUCTS</h5>
      {relatedList.length ? (
        <Carousel items={relatedList} theme={theme} classname="product-card" />)
        : <div data-testid="loading">Loading</div>}
    </section>
  );
}

export default RelatedProducts;
