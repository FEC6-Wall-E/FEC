/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageModal({
  hidden,
  currIdx,
  images,
  click,
}) {
  const [show, setShow] = React.useState(false);
  const [idx, setIdx] = React.useState(currIdx || 0);

  React.useEffect(() => {
    setIdx(currIdx || 0);
  }, [currIdx]);

  const clickHandler = () => {
    setShow(!show);
  };

  const button = (side) => {
    if (side === 'l' && idx !== 0) setIdx(idx - 1);
    if (side === 'r' && idx !== images.length - 1) setIdx(idx + 1);
  };

  function zoomer(e) {
    const target = e.currentTarget;
    let offsetX = e.nativeEvent.offsetX ? e.nativeEvent.offsetX : e.nativeEvent.touches[0].pageX;
    let offsetY = 1;

    if (e.nativeEvent.offsetY) offsetY = e.nativeEvent.offsetY;
    else offsetX = e.nativeEvent.touches[0].pageX;

    const x = (offsetX / target.offsetWidth) * 100;
    const y = (offsetY / target.offsetHeight) * 100;
    target.style.backgroundPosition = `${x}% ${y}%`;
  }

  const style = {
    backgroundImage: `url(${images[idx].url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '250%',
  };

  return hidden ? null : (
    <div id="ImageModal">
      <div className="imageModalBG" onClick={click} />
      <figure
        className="modalZoom"
        style={show ? style : null}
        onMouseMove={zoomer}
        onFocus={zoomer}
        onClick={clickHandler}
      >
        <img
          className={show ? 'show' : 'noShow'}
          src={images[idx].url}
          alt="missing"
        />
      </figure>
      <span id="modalControls">
        <button className="modalLeft" onClick={() => button('l')}>{'<-'}</button>
        <button className="modalLeft" onClick={() => button('r')}>{'->'}</button>
      </span>
    </div>
  );
}

export default ImageModal;
