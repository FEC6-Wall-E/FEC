import React from 'react';
import Style from './Style.jsx';

function StyleSelector({
  currentStyle, allStyles, setStyle, theme,
}) {
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
      <h1 className={theme} id="CurrentStyle">{currentStyle.name}</h1>
      {stylesMatrix.map((styles, idx) => (
        <div key={idx} className="styleRow">
          {styles.map((style, idx2) => (
            <Style
              theme={theme}
              key={idx2}
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
