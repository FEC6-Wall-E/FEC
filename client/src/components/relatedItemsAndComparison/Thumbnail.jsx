import React from 'react';

function Thumbnail ({ thumbnail }) { // add setMainImage
  // console.log('thumbnail ', thumbnail);
  const handleClick = () => {
    setMainImg(thumbnail);
  }
  return (
  // add onClick handler for the current thumbnail to become main image on the card
    <div className="thumbnail" onClick={handleClick}>
      {
        !thumbnail.thumbnail_url
        ?
        <img src='https://www.freeiconspng.com/uploads/no-image-icon-6.png'/>
        :
        <img src={`${thumbnail.thumbnail_url}`}/>
      }
    </div>
  );
}

export default Thumbnail;