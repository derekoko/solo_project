import React from 'react';
import { HeaderComponenet } from '../components/headerComponent';

export default function HeaderContainer({ user }) {
  return (
    <>
      <HeaderComponenet user={user} />
    </>
  );
}
