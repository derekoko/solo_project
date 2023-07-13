import React from 'react';

export const HeaderComponenet = ({ user }) => {
  return (
    <>
      <div className="header-pic-container">
        <button id="profile-button">{user.username}</button>
      </div>
      <div className="header-info-container">
        <button className="header-button" id="light-mode">
          test
        </button>
        <button className="header-button" id="burger-menu">
          test
        </button>
      </div>
    </>
  );
};
