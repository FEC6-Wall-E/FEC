import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import ProductCard from './ProductCard.jsx';

function Carousel({ relatedList }) {
  // const [length, setLength] = useState(relatedList.length);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const length = relatedList.length;

  // useEffect(() => {
  //   setLength(relatedList.length);
  // }, [relatedList]);

  const handleNav = (direction) => {
    flushSync(() => {
      if (direction === 'next' && index < length - 1) {
        setIndex(index + 1);
      } else if (direction === 'prev' && index > 0) {
        setIndex(index - 1);
      }
    });
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <>
      <nav>
        {index > 0 && < button
          className="left"
          onClick={() => handleNav('prev')}
        >
          previous
        </button>}
        {index < length - 1 && <button
          className="right"
          onClick={() => handleNav('next')}
        >
          next
        </button>}
      </nav>
      <div className="slider">
        {relatedList.map((relatedProduct, idx) =>
          <ProductCard
            key={relatedProduct}
            ref={ref}
            productId={relatedProduct}
            index={index}
            idx={idx}
          />
        )}
      </div>
    </>
  );
};

export default Carousel;
