import React from 'react';
import { useEffect, useState } from 'react';
import { SwipeComponenet } from '../components/SwipeComponent';

export const SwipeContainer = ({ users, user }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="swipe-container">
      <SwipeComponenet swipeUser={users[index]} />
    </div>
  );
};
