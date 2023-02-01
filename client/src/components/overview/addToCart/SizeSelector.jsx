import React from 'react';

function SizeSelector({ currentStyle, setSize }) {
  const sizes = [];
  Object.keys(currentStyle.skus).forEach((sku) => {
    if (currentStyle.skus[sku].quantity !== 0) {
      sizes.push(currentStyle.skus[sku].size);
    }
  });

  console.log(sizes);

  return (
    <span id="SizeSelector">
      <select name="size" default="Select Size" onChange={(e) => setSize(e.target.value)}>
        <option key="-1" value="Select Size" selected>Select Size</option>
        {sizes.map((size, idx) => <option key={idx} value={size}>{size}</option>)}
      </select>
    </span>
  );
}

export default SizeSelector;
