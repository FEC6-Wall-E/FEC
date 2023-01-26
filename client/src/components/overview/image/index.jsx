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
  }, 10000);

  return (
    <div id="overviewImage">
      <img
        src={images[index].url}
        width="670"
        height="1000"
        alt="Missing!"
      />
      <div>
        {/* Dont always want these to be HTML buttons... */}
        <button className="imageSelector" onClick={() => changeIndex(index - 1)}>left</button>
        <button className="imageSelector" onClick={() => changeIndex(index + 1)}>right</button>
      </div>
      <ImagePicker images={images} setImage={changeIndex} currID={index} />
    </div>
  );
}

export default Image;
