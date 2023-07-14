import React from 'react';

export const FriendComponenet = ({ userData }) => {
  return (
    <div className="user-friend-container">
      {userData.username}
      <div className="friend-info-container">filler</div>
      <div className="status-button-container">filler</div>
    </div>
  );
};
