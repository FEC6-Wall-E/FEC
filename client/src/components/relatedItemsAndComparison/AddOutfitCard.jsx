import React from 'react';

function AddOutfitCard({ theme, addOutfit }) {
  return (
    /* eslint-disable-next-line jsx-a11y/interactive-supports-focus */
    <div
      className={`${theme} add-outfit-card`}
      onClick={addOutfit}
      role="button"
      data-testid="add-outfit-button"
    >
      <div
        className={`${theme} plus`}
      >
        +
        <div className={`${theme} plus`}>Add to Outfit</div>
      </div>
    </div>
  );
}

export default AddOutfitCard;
