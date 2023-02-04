/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageModal({ hidden, url, click }) {
  const [show, setShow] = React.useState(false);

  const clickHandler = () => {
    setShow(!show);
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
    backgroundImage: `url(${url})`,
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
          src={url}
          alt="missing"
        />
      </figure>
    </div>
  );
}

export default ImageModal;
