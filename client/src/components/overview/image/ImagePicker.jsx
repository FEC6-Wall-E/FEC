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
  if (currID > images.length - 3 && images.length > 7) {
    transform = images.length - 6;
  }
  return (
    <div data-testid="OVERVIEW_IMAGE_PICKER" id="overviewImagePicker">
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
