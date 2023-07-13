import React from 'react';
import { HeaderComponenet } from '../components/headerComponent';

export default function HeaderContainer({ username }) {
  return (
    <header className="header-container">
      <p>{username}</p>
      <HeaderComponenet />
    </header>
  );
}
