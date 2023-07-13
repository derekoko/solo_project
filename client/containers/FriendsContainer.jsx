import React from 'react';
import { FriendComponenet } from '../components/friendComponent';

export default function FriendsContainer({ user }) {
  // for loop to load the amount of friends a user has
  return (
    <>
      <div className="friends-container">
        <FriendComponenet user={user} />
      </div>
    </>
  );
}
