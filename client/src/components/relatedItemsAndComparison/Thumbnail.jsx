import React, { forwardRef } from 'react';

/* eslint prefer-arrow-callback: [ "error", { "allowNamedFunctions": true } ] */
const Thumbnail = forwardRef(function Thumbnail({
  thumbnail, index, setMainImg, idx, setIndex, theme,
}, ref) {
  const handleClick = () => {
    setMainImg(thumbnail.url);
    setIndex(idx);
  };

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      data-testid="thumbnail"
      className={index === idx ? `active thumbnail ${theme}` : `thumbnail ${theme}`}
      ref={index === idx ? ref : null}
      onClick={handleClick}
    >
      <img
        src={!thumbnail.thumbnail_url
          ? 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
          : `${thumbnail.thumbnail_url}`}
        alt="Missing"
      />
    </div>
  );
});

export default Thumbnail;
