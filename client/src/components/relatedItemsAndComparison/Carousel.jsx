/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductCard from './ProductCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';

function Carousel({
  items, classname, theme, addOutfit, deleteOutfit, setPid,
}) {
  const numberOfSlides = items.length;
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const handleNav = (direction) => {
    flushSync(() => {
      if (direction === 'next' && index < numberOfSlides - 1) {
        setIndex(index + 1);
      } else if (direction === 'prev' && index > 0) {
        setIndex(index - 1);
      }
    });
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  };

  return (
    <div data-testid="slider" className={`product-card-slider-wrapper ${theme}`}>
      <div className={`product-card-slider-container ${theme}`}>
        {index > 0 && (
          <div
            className={`product-card-slider-button prev ${theme}`}
            data-testid="product-card-prev-button"
            onClick={() => handleNav('prev')}
            role="button"
          >
            <IoIosArrowBack />
          </div>
        )}
        {index < numberOfSlides - 1 && (
          <div
            className={`product-card-slider-button next ${theme}`}
            data-testid="product-card-next-button"
            onClick={() => handleNav('next')}
            role="button"
          >
            <IoIosArrowForward />
          </div>
        )}
        <div className={`product-card-slider ${theme}`}>
          {classname === 'outfit'
          && (
          <AddOutfitCard
            theme={theme}
            addOutfit={addOutfit}
          />
          )}
          {items.map((item, idx) => (
            <ProductCard
              classname={classname}
              key={item}
              ref={ref}
              productId={item}
              index={index}
              idx={idx}
              theme={theme}
              deleteOutfit={deleteOutfit}
              setPid={setPid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
