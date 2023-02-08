/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailCarousel({
  items, setMainImg, theme,
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
    <div data-testid="slider" className={`thumbnail-slider-wrapper ${theme}`}>
      <div className={`thumbnail-slider-container ${theme}`}>
        {index > 0 && (
          <div
            className={`thumbnail-slider-button prev ${theme}`}
            data-testid="thumbnail-prev-button"
            onClick={() => handleNav('prev')}
            role="button"
          >
            <IoIosArrowBack />
          </div>
        )}
        {index < numberOfSlides - 1 && (
          <div
            className={`thumbnail-slider-button next ${theme}`}
            data-testid="thumbnail-next-button"
            onClick={() => handleNav('next')}
            role="button"
          >
            <IoIosArrowForward />
          </div>
        )}
        <div className={`thumbnail-slider ${theme}`}>
          {items.map((item, idx) => (
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

export default ThumbnailCarousel;
