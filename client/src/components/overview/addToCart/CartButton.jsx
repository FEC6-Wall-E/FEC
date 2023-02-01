/* eslint-disable no-undef */
import React from 'react';

function CartButton({
  hidden, quantity, sku, selectDrop,
}) {
  if (hidden) return null;

  const allGood = () => {
    if (quantity && sku) {
      return true;
    }
    if (!sku) {
      // eslint-disable-next-line no-alert
      alert('Please select a size!');
      return false;
    }
    return false;
  };
  const badClick = () => {
    selectDrop();
  };
  const goodClick = () => {
    window.myLib = window.myLib || {};
    window.myLib.cart = window.myLib.cart || {};
    window.myLib.cart[sku] = quantity;
    // eslint-disable-next-line no-console
    console.log(window.myLib);
  };
  const onClick = () => {
    if (allGood()) {
      goodClick();
    } else {
      badClick();
    }
  };

  return (
    <div id="CartButton">
      <button onClick={onClick}>Hello!</button>
    </div>
  );
}

export default CartButton;
