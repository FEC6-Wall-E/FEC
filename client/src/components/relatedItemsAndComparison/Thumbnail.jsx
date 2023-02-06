import React, { forwardRef, useState } from 'react';

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const Thumbnail = forwardRef(function Thumbnail({
  thumbnail, index, setMainImg, idx, setIndex}, ref) {
    // {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}

  const handleClick = () => {
    setMainImg(thumbnail.url);
    setIndex(idx);
  };

  return (
    <div
      className={index === idx ? 'active thumbnail' : 'thumbnail'}
      ref={index === idx ? ref : null}
      onClick={handleClick}
    >
      <img src={!thumbnail.thumbnail_url ?
        'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
        :
        `${thumbnail.thumbnail_url}
        `}
        alt='Missing'
      />
    </div>
  );
});

export default Thumbnail;
