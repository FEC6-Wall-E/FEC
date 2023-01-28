import React from 'react';

function Thumbnail ({ thumbnail }) {
  console.log('thumbnail ', thumbnail);
  return (
    <div>
      {
        !thumbnail.thumbnail_url
        ?
        <img className="mainImg" src='https://www.freeiconspng.com/uploads/no-image-icon-6.png'/>
        :
        <img className="thumbnail" src={`${thumbnail.thumbnail_url}`}/>
      }
    </div>
  );
}

export default Thumbnail;