import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import ProductCard from './ProductCard.jsx';

function Carousel({ relatedList }) {
  const numberOfSlides = relatedList.length;
  // const [numberOfSlides, setNumberOfSlides] = useState(numberOfSlides);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   setNumberOfSlides(relatedList.length);
  // }, [relatedList]);

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
      inline: 'center',
    });
  };

  return (
    <>
      <div className="slider-buttons">
        {index > 0 && (
        <button
          className="left"
          onClick={() => handleNav('prev')}
        >
          previous
        </button>
        )}
        {index < numberOfSlides - 1 && (
        <button
          className="right"
          onClick={() => handleNav('next')}
        >
          next
        </button>
        )}
      </div>
      <div className="slider">
        {relatedList.map((relatedProduct, idx) => (
          <ProductCard
            key={relatedProduct}
            ref={ref}
            productId={relatedProduct}
            index={index}
            idx={idx}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;
