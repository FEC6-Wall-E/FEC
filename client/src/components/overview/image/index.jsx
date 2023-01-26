import React from 'react';

function Image({ images }) {
  const [index, setIndex] = React.useState(0);

  if (index < 0) {
    setIndex(images.length - 1);
  } else if (index >= images.length) {
    setIndex(0);
  }

  const changeIndex = (i) => {
    if (i < 0) {
      setIndex(images.length - 1);
    } else if (i >= images.length) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  };

  return (
    <div id="overviewImage">
      <img
        src={images[index].url}
        width="670"
        height="1000"
        alt="Missing!"
      />
      <div>
        <button className="imageSelector" onClick={() => changeIndex(index - 1)}>left</button>
        <button className="imageSelector" onClick={() => changeIndex(index + 1)}>right</button>
      </div>
    </div>
  );
}

export default Image;
