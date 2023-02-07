import React, { useState } from 'react';
import CartButton from './CartButton.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';

function AddToCart({ currentStyle, sizes }) {
  const [sku, setSku] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const selectRef = React.useRef();
  let size = null;
  if (sku && currentStyle.skus[sku]) {
    size = currentStyle.skus[sku].size;
  } else if (sku) {
    setSku(null);
    setQuantity(1);
  }

  const selectDrop = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  return (
    <div id="AddToCart">
      <span id="overviewSelectors">
        <SizeSelector
          ref={selectRef}
          currentStyle={currentStyle}
          setSku={setSku}
          sizes={sizes}
          size={size}
        />
        <QuantitySelector
          currentStyle={currentStyle}
          currentSku={sku}
          setQuantity={setQuantity}
        />
      </span>
      <CartButton
        selectDrop={selectDrop}
        hidden={sizes.length === 0}
        quantity={quantity}
        sku={sku}
        size={size}
      />
    </div>
  );
}

export default AddToCart;
