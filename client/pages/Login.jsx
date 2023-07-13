import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const response = await fetch('/api', {
  //       type: 'GET',
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.body) {
  //         navigate('/home');
  //       } else {
  //         navigate('/signup');
  //       }
  //     } else {
  //       alert('bad response');
  //     }
  //   };
  //   fetcher();
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

//use context. see if a user has been logged into use context. before you load a componenet you could route them.
