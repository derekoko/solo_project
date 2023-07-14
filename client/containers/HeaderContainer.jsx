import React from 'react';
import { HeaderComponenet } from '../components/headerComponent';

export default function HeaderContainer({
  user,
  setFriendClick,
  friendClicked,
}) {
  return (
    <>
      <HeaderComponenet
        user={user}
        setFriendClick={setFriendClick}
        friendClicked={friendClicked}
      />
    </>
  );
}
