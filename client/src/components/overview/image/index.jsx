/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImagePicker from './ImagePicker.jsx';

function Image({ images }) {
  const [index, setIndex] = React.useState(0);

  const changeIndex = (i) => {
    // eslint-disable-next-line no-use-before-define
    clearTimeout(timeout);
    if (i < 0) {
      setIndex(images.length - 1);
    } else if (i >= images.length) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  };

  let timeout = setTimeout(() => {
    changeIndex(index + 1);
  }, 6000);

  return (
    <div id="overviewImage">
      <div className="overViewSlider">
        {images.map((image) => (
          <img
            className="overviewImage"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            src={image.url}
            width="670"
            height="1000"
            alt="Missing!"
          />
        ))}
      </div>
      <div>
        {/* Dont always want these to be HTML buttons... */}
        <button className="imageSelectorLeft" onClick={() => changeIndex(index - 1)} />
        <button className="imageSelectorRight" onClick={() => changeIndex(index + 1)} />
      </div>
      <ImagePicker images={images} setImage={changeIndex} currID={index} />
    </div>
  );
}

export default Image;
