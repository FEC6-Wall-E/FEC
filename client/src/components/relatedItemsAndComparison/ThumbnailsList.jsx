import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailsList ({ images, id, setMainImg }) {
  // console.log('thumbnails ', images);
  const [currIdx, setCurrIdx] = useState(0);
  const [length, setLength] = useState(images.length);
  const imgsToDisplay = 4;

  // console.log('showThumbnails ', showThumbnails);

  useEffect(() => {
    setLength(images.length);
  }, [images] );

  const handlePrevious = () => {
    if (currIdx > 0) {
      setCurrIdx(currIdx - 1);
    }
  };

  const handleNext = () => {
    if (currIdx < length - imgsToDisplay) {
      setCurrIdx(currIdx + 1);
    }
  }

  return (
    <div className="carousel thumbnails">
      {currIdx > 0 && <button className="carousel left" onClick={handlePrevious}>previous</button>}
      <div className="carousel container"
      style={{ transform: `translateX(-${currIdx * (100 / imgsToDisplay)}%)`}}>
        {images.map((thumbnail, index) => <Thumbnail key={index} thumbnail={thumbnail} />)}
      </div>
      {currIdx < length - imgsToDisplay && <button className="carousel right" onClick={handleNext}>next</button>}
      {/* {images.map((thumbnail, index) => {
        // console.log('here ', thumbnail);
        return (
          <div key={index}>
            {index >= 0 && index <= 4 && (
              <Thumbnail thumbnail={thumbnail} setMainImg={setMainImg}/>
            )}
            </div>
        );
      })} */}
    </div>
  );
}

export default ThumbnailsList;