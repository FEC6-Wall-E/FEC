import React from 'react';

function AddOutfitCard({ product, theme, addOutfit }) {
  return (
    <div className={`${theme} add-outfit-card`}>
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <div
        className={`${theme} plus`}
        onClick={addOutfit}
        role="button"
        data-testid="add-outfit-button"
      >
        +
      </div>
      <h5 className={`${theme} plus`}>Add to Outfit</h5>
    </div>
  );
}

export default AddOutfitCard;
