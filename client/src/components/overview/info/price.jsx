import React from 'react';

function Price({ sale, original }) {
  return !sale
    ? (
      // replaced <p> tags with <spans> for layout of product cards
      <div className="price">
        <span>{`$${original}`}</span>
      </div>
    )
    : (
      <div className="price">
        <span className="sale">{`$${sale}`}</span>
        <span className="original">{`$${original}`}</span>
      </div>
    );
}

export default Price;
