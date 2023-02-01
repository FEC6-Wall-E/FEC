import React from 'react';

function QuantitySelector({ currentStyle, currentSku, setQuantity }) {
  const quantityArray = [];
  const totalNum = currentSku ? currentStyle.skus[currentSku].quantity : 0;
  let limit = 15;

  if (totalNum <= 15) {
    limit = totalNum;
  }

  for (let i = 0; i < limit; i++) {
    quantityArray.push(i + 1);
  }

  if (totalNum === 0) {
    return (
      <span id="QuantitySelector">
        <select disabled name="Quantity" value="-">
          <option value="-">-</option>
        </select>
      </span>
    );
  }

  return (
    <span id="QuantitySelector">
      <select name="Quantity" onChange={(e) => setQuantity(e.target.value)}>
        <option selected key={-1} value={1}>1</option>
        {quantityArray.map((quantity, idx) => (
          <option
            key={idx}
            value={quantity}
          >
            {quantity}
          </option>
        ))}
      </select>
    </span>
  );
}

export default QuantitySelector;
