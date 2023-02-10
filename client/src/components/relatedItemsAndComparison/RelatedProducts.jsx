import React from 'react';
import Carousel from './Carousel.jsx';
import handleInteraction from '../../handleInteraction.js';

function RelatedProducts({
  relatedList, theme, setPid, product,
}) {
  return (
    <div data-testid="related-products" onClick={(e) => handleInteraction(e, 'RELATED')} id="related-products">
      <h3 data-testid="heading" className={`related-header ${theme}`}>RELATED PRODUCTS</h3>
      {relatedList.length ? (
        <Carousel items={relatedList} theme={theme} classname="product-card" setPid={setPid} mainProduct={product} />)
        : <div data-testid="loading">Loading</div>}
    </div>
  );
}

export default RelatedProducts;
