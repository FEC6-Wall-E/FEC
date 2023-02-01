/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageModal({ hidden, url, click }) {
  return hidden ? null : (
    <div className="click-zoom">
      <label>
        <input type="checkbox" />
        <img src={url} />
      </label>
    </div>
  );
}

export default ImageModal;
