import React from 'react';

function Price({ sale, original, theme }) {
  return !sale
    ? (
      <div data-testid="PRICE" className="price">
        <p className={theme}>{`$${original}`}</p>
      </div>
    )
    : (
      <div data-testid="PRICE" className="price">
        <p className={`sale ${theme}`}>{`$${sale}`}</p>
        <p className={`original ${theme}`}>{`$${original}`}</p>
      </div>
    );
}

export default Price;
