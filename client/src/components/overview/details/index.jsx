import React from 'react';

function Details({ product, theme }) {
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
          <div className="featureContainer">
            <p className={`feature ${theme}`} key={`feature ${idx}`}>
              {feat.feature}
            </p>
            <p className={`tripple-arrow ${theme}`} key={`feature ${idx}`}>
              {'>>>'}
            </p>
            <p className={`value ${theme}`} key={`feature ${idx}`}>
              {feat.value || '???'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
