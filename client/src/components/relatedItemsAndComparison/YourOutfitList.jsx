import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';

function YourOutfitList({
  product, theme, handleInteraction,
}) {
  const [outfitList, setOutfitLst] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('outfitList');
    if (data) {
      setOutfitLst(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('outfitList', JSON.stringify(outfitList));
  }, [outfitList]);

  const addOutfit = () => {
    if (!outfitList.includes(product.id)) {
      setOutfitLst([...outfitList, product.id]);
    }
  };

  const deleteOutfit = (id) => {
    setOutfitLst([...outfitList].filter((itemId) => itemId !== id));
  };

  return (
    <div
      data-testid="outfitList"
      id="outfitList"
      className={`${theme}`}
      onClick={(e) => handleInteraction(e, 'OUTFITLIST')}
    >
      <h5 className={`${theme}`}>YOUR OUTFIT</h5>
      <section>
        <Carousel items={outfitList} classname="outfit" theme={theme} product={product} addOutfit={addOutfit} deleteOutfit={deleteOutfit} />
      </section>
    </div>
  );
}

export default YourOutfitList;
