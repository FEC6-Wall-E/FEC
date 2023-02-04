import React from 'react';

function PickerImage({
  idx,
  currID,
  url,
  setImage,
  transform,
}) {
  const [src, setSrc] = React.useState(url);

  React.useEffect(() => {
    setSrc(url);
  }, [url]);

  const onError = () => {
    setSrc('https://www.freeiconspng.com/uploads/no-image-icon-6.png');
  };

  return (
    <span
      className="pickerImageBG"
      style={{
        objectFit: 'cover',
        transform: `translate3d(0, ${-transform * 10}vh, 0)`,
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
        src={src}
        onError={onError}
        alt="?"
      />
    </span>

  );
}

export default PickerImage;
