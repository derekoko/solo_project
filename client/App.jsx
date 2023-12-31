import React from 'react';
import './styling/styles.scss';
import './styling/headerStyles.scss';
import './styling/friendStyles.scss';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { Signup } from './pages/Signup';
import { CreateAccount } from './pages/CreateAccount';
import { MainPage } from './pages/MainPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/create-account" element={<CreateAccount />} />
      <Route path="/home" element={<MainPage />} />
    </Routes>
  );
}

/* <PrivateRoute path="/home">{<App />}</PrivateRoute> */
