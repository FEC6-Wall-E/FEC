import React, { useState } from 'react';

function Photo({ photo }) {
  const [clickedPhoto, setClickedPhoto] = useState(false);
  const blowUpImage = () => {
    setClickedPhoto(true);
  };
  const closeImage = () => {
    setClickedPhoto(false);
  };
  return (
    <span>
      <img
        className="a-photo"
        src={`${photo}`}
        onClick={blowUpImage}
        alt="answer"
      />
      { clickedPhoto === true && (
        <div>
          <div className="qa-modal-shadow" onClick={closeImage} />
          <div className="qa-modal">
            <div className="qa-modal-photo">
              <img className="a-photo-modal" src={`${photo}`} alt="answer" />
            </div>
          </div>
        </div>
      )}
    </span>
  );
}

export default Photo;
