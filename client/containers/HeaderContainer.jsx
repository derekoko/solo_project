import React from 'react';

export default function HeaderContainer() {
  return (
    <header className="header-container">
      <div className="header-pic-container">
        filler 1
        <img id="prof-pic" src="" alt="" />
      </div>
      <div className="header-info-container">
        <button className="header-button" id="light-mode">
          test
        </button>
        <button className="header-button" id="burger-menu">
          test
        </button>
      </div>
    </header>
  );
}
