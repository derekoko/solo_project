import React from 'react';
import { useEffect, useState } from 'react';
import { SwipeComponenet } from '../components/SwipeComponent';

export const SwipeContainer = ({ users, user }) => {
  const [index, setIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);

  const handleAccept = () => {
    if (users && users[0]) {
      setIndex(index + 1);
      const data = {
        requestee_id: users[index]._id,
        requester_id: user._id,
      };
      fetch('/api/friendRequest', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
      });

      if (accept) {
        setAccept(false);
      } else {
        setAccept(true);
      }
    }
  };
  const handleReject = () => {
    setIndex(index + 1);
  };

  // const sendFriendRequest = async () => {
  //   if (users && users[0]) {
  //     const data = {
  //       requestee_id: users[index]._id,
  //       requester_id: user._id,
  //     };
  //     await fetch('/api/friendRequest', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //     });
  //     console.log('sent data!');
  //   }
  // };

  // useEffect(() => {
  //   const fetcher = async () => {
  //     await sendFriendRequest();
  //     console.log('sent the data!');
  //   };
  //   fetcher();
  // }, [accept]);

  return (
    <div className="swipe-container">
      <SwipeComponenet swipeUser={users[index]} />
      <div className="button-container">
        <button id="reject" onClick={handleReject}>
          {' '}
          &#10060;
        </button>
        <button id="accept" onClick={handleAccept}>
          &#x2705;
        </button>
      </div>
    </div>
  );
};
