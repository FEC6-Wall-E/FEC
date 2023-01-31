import React from 'react';

function Style({ style, setStyle, selected }) {
  const onClick = () => {
    if (!selected) {
      setStyle(style);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <span onClick={onClick}>
      <img
        className={selected ? 'selected style' : 'style'}
        width="100px"
        height="100px"
        style={{ objectFit: 'cover' }}
        src={style.photos[0].thumbnail_url}
        alt="ERROR"
      />
    </span>
  );
}

export default Style;
