/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImagePicker from './ImagePicker.jsx';
import ImageModal from './ImageModal.jsx';

function Image({ images }) {
  const baseModal = { hidden: true, url: '', click: null };
  const [index, setIndex] = React.useState(0);
  const [modal, setModal] = React.useState(baseModal);

  const changeIndex = (i) => {
    // eslint-disable-next-line no-use-before-define

    if (i < 0) {
      setIndex(images.length - 1);
    } else if (i >= images.length) {
      setIndex(0);
    } else {
      setIndex(i);
    }
  };

  React.useEffect(() => {
    changeIndex(0);
  }, [images]);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      changeIndex(index + 1);
    }, 6000);

    return () => clearTimeout(timeoutID);
  }, [index]);

  return (
    <div id="Image">
      <div id="overviewImage">
        <div className="overViewSlider">
          {images.map((image, idx) => (
            <img
              onClick={() => setModal({
                hidden: false,
                url: image.url,
              })}
              className="overviewImage"
              style={{
                width: '30vw',
                height: '80vh',
                transform: `translate3d(${-index * 100}%, 0, 0)`,
                objectFit: 'cover',
              }}
              src={image.url}
              width="1000px"
              height="1000px"
              alt="Missing!"
              key={idx}
            />
          ))}
        </div>
        <div>
          {/* Dont always want these to be HTML buttons... */}
          <button className="imageSelector left" onClick={() => changeIndex(index - 1)} />
          <button className="imageSelector right" onClick={() => changeIndex(index + 1)} />
        </div>
        <ImagePicker images={images} setImage={changeIndex} currID={index} />
      </div>
      <ImageModal hidden={modal.hidden} url={modal.url} click={() => setModal(baseModal)} />
    </div>
  );
}

export default Image;
