import React from 'react';
import ProductCard from './ProductCard.jsx';
import handleInteraction from '../../handleInteraction.js';

function YourOutfitList() {
  return (
    <section onClick={(e) => handleInteraction(e, 'OUTFITLIST')} id="outfitList">
      <h5>YOUR OUTFIT</h5>
      <section>
        <ProductCard />
      </section>
    </section>
  );
}

export default YourOutfitList;
