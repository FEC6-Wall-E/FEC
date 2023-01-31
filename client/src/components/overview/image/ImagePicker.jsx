/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function ImagePicker({ images, setImage, currID }) {
  return (
    <div id="overviewImagePicker">
      {images.map((image, idx) => (
        <img
          key={idx}
          className="imagePickerImage"
          width="70"
          height="100"
          style={{ objectFit: 'cover' }}
          onClick={() => setImage(idx)}
          id={idx === currID ? 'picked' : null}
          src={image.thumbnail_url}
          alt="X?X?X"
        />
      ))}
    </div>
  );
}

export default ImagePicker;
