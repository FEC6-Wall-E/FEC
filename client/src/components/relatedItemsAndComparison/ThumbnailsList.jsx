import React, { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailsList({ images, setMainImg }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(images.length);
  const ref = useRef(null);
  const imgsToDisplay = 4;

  useEffect(() => {
    setLength(images.length);
  }, [images]);

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
      inline: 'nearest',
    });
  };

  return (
    <div className="thumbnails-slider-container">
      {index > 0 && <button className="thumbnails-slider-button left" onClick={() => handleNav('prev')}> previous </button>}
      <div className="thumbnails-slider">
        {images.map((thumbnail, idx) => (
          <Thumbnail
            key={idx}
            thumbnail={thumbnail}
            ref={ref}
            index={index}
            idx={idx}
            setMainImg={setMainImg}
            setIndex={setIndex}
          />
        ))}
      </div>
      {index < length - 1 && <button className="thumbnails-slider-button right" onClick={() => handleNav('next')}> next </button>}
    </div>
  );
}

export default ThumbnailsList;
