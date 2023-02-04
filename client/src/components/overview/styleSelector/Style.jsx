import React from 'react';

function Style({ style, setStyle, selected }) {
  const onClick = () => {
    if (!selected) {
      setStyle(style);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="styleContainer dropShadow" onClick={onClick}>
      {selected ? <i className="checkmark fa-solid fa-check fa-2xl" /> : null}
      <img
        className={selected ? 'selected style' : 'style'}
        width="8vh"
        height="8vh"
        style={{ objectFit: 'cover' }}
        src={style.photos[0].thumbnail_url}
        alt="ERROR"
      />
    </div>
  );
}

export default Style;
