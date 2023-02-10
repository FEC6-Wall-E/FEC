import React from 'react';

function PickerImage({
  idx,
  currID,
  url,
  setImage,
  transform,
}) {
  const [src, setSrc] = React.useState(url);

  const placeholder = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

  React.useEffect(() => {
    setSrc(url);
  }, [url]);

  const onError = () => {
    setSrc(placeholder);
  };

  return (
    <span
      className="pickerImageBG"
      style={{
        objectFit: 'cover',
        transform: `translate3d(0, calc(${-transform * 10}vh + ${transform * 10}px), 0)`,
        transition: 'all .5s ease',
      }}
    >
      <img
        key={idx}
        className="imagePickerImage dropShadow"
        width="70"
        height="100"
        onClick={() => setImage(idx)}
        id={idx === currID ? 'picked' : null}
        src={src || placeholder}
        onError={onError}
        alt="missing"
      />
    </span>

  );
}

export default PickerImage;
