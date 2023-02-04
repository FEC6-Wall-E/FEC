import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import ProductCard from './ProductCard.jsx';
import Thumbnail from './Thumbnail.jsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function Carousel({ items, classname, setMainImg }) {
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
    <div className={`${classname}-slider-container`}>
      {index > 0 && (
      <button
        className={`${classname}-slider-button prev`}
        onClick={() => handleNav('prev')}
      >
        <IoIosArrowBack />
      </button>
      )}
      {index < numberOfSlides - 1 && (
        <button
          className={`${classname}-slider-button next`}
          onClick={() => handleNav('next')}
        >
          <IoIosArrowForward />
        </button>
        )}
        <div className={`${classname}-slider`} >
          {classname === 'product-card' ?
            items.map((item, idx) =>
              <ProductCard
                key={item}
                ref={ref}
                relatedProductId={item}
                index={index}
                idx={idx}
              />
            )
            :
            items.map((item, idx) =>
              <Thumbnail
                key={idx}
                thumbnail={item}
                ref={ref}
                index={index}
                idx={idx}
                setMainImg={setMainImg}
                setIndex={setIndex}
              />
            )
          }
        </div>
    </div>
  );
}

export default Carousel;