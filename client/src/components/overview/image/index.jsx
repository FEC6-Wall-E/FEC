/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ImagePicker from './ImagePicker.jsx';
import ImageModal from './ImageModal.jsx';

function Image({ style }) {
  const baseModal = { hidden: true, url: '', click: null };
  const images = style.photos;
  const [index, setIndex] = React.useState(0);
  const [modal, setModal] = React.useState(baseModal);

  const placeholder = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

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
    <div data-testid="IMAGE_MAIN" id="Image">
      <div data-testid="OVERVIEW_IMAGE" id="overviewImage">
        <div data-testid="OVERVIEW_IMAGE_SCROLL" className="overViewSlider">
          {images.map((image, idx) => (
            <img
              data-testid={`OVERVIEW_IMAGE_SCROLL_${idx}`}
              onClick={() => setModal({
                hidden: false,
                currIdx: idx,
              })}
              className="overviewImage"
              style={{
                width: '30vw',
                height: '80vh',
                transform: `translate3d(${-index * 100}%, 0, 0)`,
                objectFit: 'cover',
              }}
              src={image.url || placeholder}
              alt="Missing!"
              key={idx}
            />
          ))}
        </div>
        <div>
          {/* Dont always want these to be HTML buttons... */}
          <button data-testid="OVERVIEW_IMAGE_BUTTON_LEFT" className="imageSelector left" onClick={() => changeIndex(index - 1)} />
          <button data-testid="OVERVIEW_IMAGE_BUTTON_RIGHT" className="imageSelector right" onClick={() => changeIndex(index + 1)} />
        </div>
        <ImagePicker images={images} setImage={changeIndex} currID={index} />
      </div>
      <ImageModal
        images={images}
        hidden={modal.hidden}
        currIdx={modal.currIdx}
        click={() => setModal(baseModal)}
      />
    </div>
  );
}

export default Image;
