import React from 'react';

function Details({ product, theme }) {
  const featureCreator = (feat) => `${feat.feature}   --   ${feat.value}`;

  return (
    <div data-testid="OVERVIEW_DETAILS" id="ProductDetails">
      <div className={`productDetails ${theme}`}>
        <h2 className={`slogan ${theme}`}>
          {product.slogan}
        </h2>
        <p className={`description ${theme}`}>
          {product.description}
        </p>
      </div>
      <div className={`features ${theme}`}>
        {product.features.map((feat, idx) => (
          <p className={`feature ${theme}`} key={idx}>
            {featureCreator(feat)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Details;
