/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import handleInteraction from '../../handleInteraction.js';

function Header({ setTheme, theme }) {
  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div onClick={(e) => handleInteraction(e, 'HEADER')} className={`pageHeader ${theme}`}>
      <img
        src="/images/buyInLarge.svg"
        alt="buyInLargeIcon"
        width="125"
        height="100"
      />
      {theme === 'light'
        ? <i className="moonIcon fa-2xl fa-solid fa-moon" onClick={handleClick} />
        : <i className="sunIcon fa-2xl fa-solid fa-sun" onClick={handleClick} />}
    </div>
  );
}

export default Header;
