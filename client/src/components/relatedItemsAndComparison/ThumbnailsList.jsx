import React from 'react';
import Thumbnail from './Thumbnail.jsx';

function ThumbnailsList ({ thumbnails, id }) {
  // console.log('thumbnail ', thumbnails);
  return (
    <div>
      <button>left</button>
      {thumbnails.map((thumbnail, index) => <Thumbnail key={index} thumbnail={thumbnail}/>)}
      <button>rigth</button>
    </div>
  );
}

export default ThumbnailsList;