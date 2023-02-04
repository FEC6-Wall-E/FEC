import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import ProductCard from './ProductCard.jsx';

function Carousel({ relatedList }) {
  const numberOfSlides = relatedList.length;
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
    <>
      {index > 0 && (
      <button
        className="slider-button left"
        onClick={() => handleNav('prev')}
      >
        previous
      </button>
      )}
      <div className="slider" >
        {relatedList.map((relatedProduct, idx) => (
          <ProductCard
            key={relatedProduct}
            ref={ref}
            relatedProductId={relatedProduct}
            index={index}
            idx={idx}
          />
        ))}
      </div>
      {index < numberOfSlides - 1 && (
        <button
          className="slider-button right"
          onClick={() => handleNav('next')}
        >
          next
        </button>
        )}
    </>
  );
}

export default Carousel;
//style={{ transform: `translateX(-${index * 100}%)` }