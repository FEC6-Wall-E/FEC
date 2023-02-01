import React, { useState } from 'react';
import CartButton from './CartButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';

function AddToCart({ currentStyle }) {
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div id="AddToCart">
      <SizeSelector currentStyle={currentStyle} currentSize={size} setSize={setSize} />
    </div>
  );
}

export default AddToCart;
