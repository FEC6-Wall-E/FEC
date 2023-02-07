import React from 'react';

function Price({ sale, original }) {
  return !sale
    ? (
      <div data-testid="PRICE" className="price">
        <p>{`$${original}`}</p>
      </div>
    )
    : (
      <div data-testid="PRICE" className="price">
        <p className="sale">{`$${sale}`}</p>
        <p className="original">{`$${original}`}</p>
      </div>
    );
}

export default Price;
