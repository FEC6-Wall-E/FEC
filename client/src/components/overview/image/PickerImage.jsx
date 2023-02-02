import React from 'react';

function PickerImage({
  idx,
  currID,
  url,
  setImage,
  transform,
}) {
  const [src, setSrc] = React.useState(url);

  const onError = () => {
    setSrc('https://www.freeiconspng.com/uploads/no-image-icon-6.png');
  };

  return (
    <img
      key={idx}
      className="imagePickerImage dropShadow"
      width="70"
      height="100"
      style={{
        objectFit: 'cover',
        transform: `translate3d(0, ${-transform * 100}px, 0)`,
        transition: 'all .5s ease',
      }}
      onClick={() => setImage(idx)}
      id={idx === currID ? 'picked' : null}
      src={src}
      onError={onError}
      alt="?"
    />
  );
}

export default PickerImage;
