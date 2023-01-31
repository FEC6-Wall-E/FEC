import React from 'react';

function Style({ style, setStyle, selected }) {
  const onClick = () => {
    if (!selected) {
      setStyle(style);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="styleContainer" onClick={onClick}>
      {selected ? <i className="checkmark fa-brands fa-twitter fa-2xl shareButton" /> : null}
      <img
        className={selected ? 'selected style' : 'style'}
        width="100px"
        height="100px"
        style={{ objectFit: 'cover' }}
        src={style.photos[0].thumbnail_url}
        alt="ERROR"
      />
    </div>
  );
}

export default Style;
