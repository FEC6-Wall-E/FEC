import React from 'react';

function Star({ value }) {
  return (
    <span className={`star val${value}`}>&#9733;</span>
  );
}

export default Star;
