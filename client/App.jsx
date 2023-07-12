import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import SideNavContainer from './containers/SideNavContainer.jsx';
import './styling/styles.scss';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { Signup } from './pages/Signup';
import { CreateAccount } from './pages/CreateAccount';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/create-account" element={<CreateAccount />} />
    </Routes>
  );
}

/* <PrivateRoute path="/home">{<App />}</PrivateRoute> */
