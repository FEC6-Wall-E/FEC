import React from 'react';
import ProductCard from './ProductCard.jsx';

function YourOutfitList() {
  return (
    <section data-testid="outfitList" id="outfitList">
      <h5>YOUR OUTFIT</h5>
      <section>
        <ProductCard />
      </section>
    </section>
  );
}

export default YourOutfitList;
