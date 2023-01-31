import React from 'react';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(function Thumbnail({ thumbnail, index, setMainImg, idx }, ref) {
  const handleClick = () => {
    setMainImg(thumbnail);
  }
  return (
    <div
      className={index === idx ? 'active thumbnail' : 'thumbnail'}
      ref={index === idx ? ref : null}
      onClick={handleClick}
    >
      <img src={!thumbnail.thumbnail_url ?
        'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
        :
        `${thumbnail.thumbnail_url}`}
      />
    </div>
  );
});

export default Thumbnail;