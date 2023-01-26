/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function ImagePicker({ images, setImage, currID }) {
  let index = 0;
  const displayImages = images.map((image) => {
    const newImage = image;
    newImage.id = index++;
    return image;
  });

  return (
    <div id="overviewImagePicker">
      {displayImages.map((image) => (
        <img
          className="imagePickerImage"
          width="70"
          height="100"
          onClick={() => setImage(image.id)}
          id={image.id === currID ? 'picked' : null}
          src={image.thumbnail_url}
          alt="X?X?X"
        />
      ))}
    </div>
  );
}

export default ImagePicker;
