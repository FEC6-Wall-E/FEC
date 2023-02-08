import React from 'react';

function Style({
  style, setStyle, selected, theme,
}) {
  const onClick = () => {
    if (!selected) {
      setStyle(style);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`styleContainer dropShadow ${theme}`} onClick={onClick}>
      {selected ? <i className="checkmark fa-solid fa-check fa-2xl" /> : null}
      <img
        className={selected ? 'selected style' : 'style'}
        width="7vh"
        height="7vh"
        style={{ objectFit: 'cover' }}
        src={style.photos[0].thumbnail_url}
        alt="ERROR"
      />
    </div>
  );
}

export default Style;
