import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailsList ({ images, id, setMainImg }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(images.length);
  const ref = useRef(null);
  const imgsToDisplay = 4;

  useEffect(() => {
    setLength(images.length);
  }, [images] );

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
    <div className="thumbnails-slider-container">
      <nav>
        {index > 0 &&
          <button
            className="thumbnails left"
            onClick={() => handleNav('prev')}
          >
            previous
          </button>}
        {index < length - 1 &&
          <button
            className="thumbnails right"
            onClick={() => handleNav('next')}
          >
            next
          </button>}
      </nav>
      <div className="thumbnails-slider">
        {images.map((thumbnail, idx) =>
          <Thumbnail
            key={idx}
            thumbnail={thumbnail}
            ref={ref}
            index={index}
            idx={idx}
            setMainImg={setMainImg}
          />
        )}
      </div>
    </div>
  );
}

export default ThumbnailsList;
{/* style={{ transform: `translateX(-${index * (100 / imgsToDisplay)}%)`}}> */}