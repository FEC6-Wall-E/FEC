import React from 'react';
import Carousel from './Carousel.jsx';

function RelatedProducts({ relatedList, theme, setPid }) {
  return (
    <div data-testid="related-products" id="related-products">
      <h5 data-testid="heading" className={theme}>RELATED PRODUCTS</h5>
      {relatedList.length ? (
        <Carousel items={relatedList} theme={theme} classname="product-card" setPid={setPid} />)
        : <div data-testid="loading">Loading</div>}
    </div>
  );
}

export default RelatedProducts;
