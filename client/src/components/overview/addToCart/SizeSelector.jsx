import React from 'react';

function SizeSelector({ currentStyle, setSku }) {
  const sizes = [];
  Object.keys(currentStyle.skus).forEach((sku) => {
    if (currentStyle.skus[sku].quantity !== 0) {
      sizes.push(currentStyle.skus[sku].size);
    }
  });

  const sizeToSku = (size) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const sku in currentStyle.skus) {
      if (currentStyle.skus[sku].size === size) {
        setSku(sku);
        return;
      }
    }
  };

  return sizes.length === 0 ? (
    <span id="SizeSelector">
      <select name="size" disabled>
        <option key="-1" value="OOS" selected>OUT OF STOCK</option>
      </select>
    </span>
  ) : (
    <span id="SizeSelector">
      <select name="size" onChange={(e) => sizeToSku(e.target.value)}>
        <option selected key="-1" value="Select Size">Select Size</option>
        {sizes.map((size, idx) => <option key={idx} value={size}>{size}</option>)}
      </select>
    </span>
  );
}

export default SizeSelector;
