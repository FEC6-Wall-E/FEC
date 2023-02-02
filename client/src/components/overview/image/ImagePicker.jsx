/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function ImagePicker({ images, setImage, currID }) {
  let transform = 0;
  if (currID > 3 && images.length > 7) {
    transform = currID - 3;
  }
  return (
    <div id="overviewImagePicker">
      {images.map((image, idx) => {
        const src = image.thumbnail_url || 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
        return (
          <img
            key={idx}
            className="imagePickerImage"
            width="70"
            height="100"
            style={{
              objectFit: 'cover',
              transform: `translate3d(0, ${-transform * 100}px, 0)`,
              transition: 'all .5s ease',
            }}
            onClick={() => setImage(idx)}
            id={idx === currID ? 'picked' : null}
            src={src}
            alt="?"
          />
        );
      })}
    </div>
  );
}

export default ImagePicker;
