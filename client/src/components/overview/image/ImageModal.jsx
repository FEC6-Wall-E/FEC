/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageModal({ hidden, url, click }) {
  return hidden ? null : (
    <div>
      <div id="imageModalBG" onClick={click} />
      <img
        src={url}
        alt="missing!"
        id="imageModalImage"
        width="1050"
        height="1500"
      />
    </div>
  );
}

export default ImageModal;
