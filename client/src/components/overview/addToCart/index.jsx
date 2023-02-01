import React, { useState } from 'react';
import CartButton from './CartButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';

function AddToCart({ currentStyle }) {
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div id="AddToCart">
      <SizeSelector currentStyle={currentStyle} setSku={setSku} />
      <QuantitySelector currentStyle={currentStyle} currentSku={sku} setQuantity={setQuantity} />
    </div>
  );
}

export default AddToCart;
