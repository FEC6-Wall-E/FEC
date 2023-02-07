import React from 'react';

function Details({ product }) {
  const featureCreator = (feat) => `${feat.feature}   --   ${feat.value}`;

  return (
    <div data-testid="OVERVIEW_DETAILS" id="ProductDetails">
      <div className="productDetails">
        <h2 className="slogan">
          {product.slogan}
        </h2>
        <p>
          {product.description}
        </p>
      </div>
      <div className="features">
        {product.features.map((feat, idx) => (
          <p className="feature" key={idx}>
            {featureCreator(feat)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Details;