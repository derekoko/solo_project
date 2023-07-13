import React from 'react';
import { useEffect, useState } from 'react';
import { SwipeComponenet } from '../components/SwipeComponent';

export const SwipeContainer = ({ users, user }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="swipe-container">
      <SwipeComponenet swipeUser={users[index]} />
      <div className="button-container">
        <button id="reject"> &#10060;</button>
        <button id="accept">&#x2705;</button>
      </div>
    </div>
  );
};
