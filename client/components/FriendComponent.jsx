import React from 'react';

export const FriendComponenet = ({ user }) => {
  return (
    <div className="user-friend-container">
      {user.username}
      <div className="friend-info-container">filler</div>
      <div className="status-button-container">filler</div>
    </div>
  );
};
