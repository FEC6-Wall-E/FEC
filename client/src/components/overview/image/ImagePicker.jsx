/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PickerImage from './PickerImage.jsx';

function ImagePicker({ images, setImage, currID }) {
  let transform = 0;
  if (currID > 3 && images.length > 7) {
    transform = currID - 3;
  }
  return (
    <div id="overviewImagePicker">
      {images.map((image, idx) => (
        <PickerImage
          idx={idx}
          url={image.thumbnail_url}
          setImage={setImage}
          currID={currID}
          transform={transform}
        />
      ))}
    </div>
  );
}

export default ImagePicker;
