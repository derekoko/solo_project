import React from 'react';

export const HeaderComponenet = ({ user, setFriendClick, friendClicked }) => {
  const onFriendClick = () => {
    if (!friendClicked) {
      setFriendClick(true);
    } else {
      setFriendClick(false);
    }
  };
  return (
    <>
      <div className="header-pic-container">
        <button id="profile-button">
          <img
            id="profile-picture"
            src={`/assets/images/${user.profilePicture}`}
            alt=""
          />
          {user.username}
        </button>
      </div>
      <p className="title">MATCH MADE READY</p>
      <div className="header-info-container">
        <button
          className="header-button"
          id="friends-list"
          onClick={onFriendClick}
        >
          {friendClicked ? 'Home' : 'Friends List'}
        </button>

        <button className="header-button" id="burger-menu">
          Start chat
        </button>
      </div>
    </>
  );
};
