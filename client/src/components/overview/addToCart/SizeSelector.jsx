import React from 'react';

function SizeSelector({ currentStyle, setSize }) {
  const sizes = [];
  Object.keys(currentStyle.skus).forEach((sku) => {
    if (currentStyle.skus[sku].quantity !== 0) {
      sizes.push(currentStyle.skus[sku].size);
    }
  });

  return sizes.length === 0 ? (
    <span id="SizeSelector">
      <select name="size" disabled>
        <option key="-1" value="OOS" selected>OUT OF STOCK</option>
      </select>
    </span>
  ) : (
    <span id="SizeSelector">
      <select value="Select Size" name="size" onChange={(e) => setSize(e.target.value)}>
        <option key="-1" value="Select Size">Select Size</option>
        {sizes.map((size, idx) => <option key={idx} value={size}>{size}</option>)}
      </select>
    </span>
  );
}

export default SizeSelector;
