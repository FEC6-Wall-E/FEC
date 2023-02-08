import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductCard from './ProductCard.jsx';
import Thumbnail from './Thumbnail.jsx';

function Carousel({
  items, classname, setMainImg, theme,
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
    <div data-testid="slider" className={`${classname}-slider-wrapper ${theme}`}>
      <div className={`${classname}-slider-container ${theme}`}>
        {index > 0 && (
          // <IoIosArrowBack
          //   className={`${classname}-slider-button prev ${theme}`}
          //   data-testId="prev-button"
          //   onClick={() => handleNav('prev')}
          // />
          <button
            className={`${classname}-slider-button prev ${theme}`}
            data-testid={`${classname}-prev-button`}
            onClick={() => handleNav('prev')}
          >
            prev
          </button>
        )}
        {index < numberOfSlides - 1 && (
          // <IoIosArrowForward
          //   className={`${classname}-slider-button next ${theme}`}
          //   data-testId="next-button"
          //   onClick={() => handleNav('next')}
          // />
          <button
            className={`${classname}-slider-button next ${theme}`}
            data-testId={`${classname}-next-button`}
            onClick={() => handleNav('next')}
          >
            next
          </button>
        )}
        <div className={`${classname}-slider ${theme}`}>
          {classname === 'product-card'
            ? items.map((item, idx) => (
              <ProductCard
                key={item}
                ref={ref}
                relatedProductId={item}
                index={index}
                idx={idx}
                theme={theme}
              />
            )) : items.map((item, idx) => (
              <Thumbnail
                key={idx}
                thumbnail={item}
                ref={ref}
                index={index}
                idx={idx}
                setMainImg={setMainImg}
                setIndex={setIndex}
                theme={theme}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
