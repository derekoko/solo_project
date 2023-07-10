import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import SideNavContainer from './containers/SideNavContainer.jsx';
import './styling/styles.scss';

export default function App() {
  return (
    <div>
      <HeaderContainer />
      <SideNavContainer />
    </div>
  );
}
