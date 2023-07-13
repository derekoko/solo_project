import React from 'react';
import image from '../assets/images/discord-gold.jpg';

export const SwipeComponenet = ({ swipeUser }) => {
  const currentUser = { ...swipeUser };
  return (
    <>
      <div className="swipe-profile">
        <img
          className="swipe-image"
          src={`/assets/images/${currentUser.profilePicture}`}
          alt=""
        />
        <div className="swipe-info">
          <p className="swipe-text" id="swipe-name">
            <span id="username-text">Username:</span> <br />
            {currentUser.username}
          </p>
          <p className="swipe-text" id="swipe-games">
            <span id="fav-game-text">Favorite Game:</span> <br />
            {currentUser.games}
          </p>
          <p className="swipe-text" id="swipe-bio">
            <span id="bio-text">Bio:</span> <br /> {currentUser.bio}
          </p>
        </div>
      </div>
    </>
  );
};
