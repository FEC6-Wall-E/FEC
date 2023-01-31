import React from 'react';
import Style from './Style.jsx';

function StyleSelector({ currentStyle, allStyles, setStyle }) {
  const stylesMatrix = [];
  let row = [];

  for (let i = 0; i < allStyles.length; i++) {
    row.push(allStyles[i]);

    if (row.length === 4) {
      stylesMatrix.push(row);
      row = [];
    }
  }

  stylesMatrix.push(row);

  return (
    <div id="StyleSelector">
      <h1 id="CurrentStyle">{currentStyle.name}</h1>
      {stylesMatrix.map((styles) => (
        <div className="styleRow">
          {styles.map((style) => (
            <Style
              style={style}
              setStyle={setStyle}
              selected={style.style_id === currentStyle.style_id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default StyleSelector;
