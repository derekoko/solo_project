import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export const LoginPage = () => {
  // const navigate = useNavigate();
  // useEffect(async () => {
  //   const response = await fetch('/api/login');
  //   if (response.ok) {
  //     const data = await response.json();
  //     if (data.body) {
  //       navigate('/home');
  //     } else {
  //       navigate('/signup');
  //     }
  //   } else {
  //     alert('bad response');
  //   }
  // }, []);
  return (
    <div className="login-container">
      Login
      <form method="POST" action="/api/login">
        <input name="email" type="text" placeholder="Email"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="login"></input>
      </form>
      <a href="./signup">Sign up</a>
    </div>
  );
};
