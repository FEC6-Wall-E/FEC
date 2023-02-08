import React, { useState } from 'react';
import Carousel from './Carousel.jsx';

function YourOutfitList({
  product, theme,
}) {
  const [outfitList, setOutfitLst] = useState([]);

  const addOutfit = () => {
    if (!outfitList.includes(product.id)) {
      setOutfitLst([...outfitList, product.id]);
    }
  };

  const deleteOutfit = (id) => {
    const deleteIdx = outfitList.indexOf(id);
    outfitList.splice(deleteIdx, 1);
    setOutfitLst(outfitList);
  };

  return (
    <section
      data-testid="outfitList"
      id="outfitList"
      className={`${theme}`}
    >
      <h5 className={`${theme}`}>YOUR OUTFIT</h5>
      <section>
        <Carousel items={outfitList} classname="outfit" theme={theme} product={product} addOutfit={addOutfit} deleteOutfit={deleteOutfit} />
      </section>
    </section>
  );
}

export default YourOutfitList;
