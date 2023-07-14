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
    <>
      <div className="login-main-container">
        <p id="login-title">MATCHMADE READY</p>
        <div className="login-container">
          Login
          <form method="POST" action="/api/login">
            <input name="email" type="text" placeholder="Email"></input> <br />
            <input
              name="password"
              type="password"
              placeholder="password"
            ></input>
            <br />
            <input type="submit" value="login"></input>
          </form>
          <a id="signup" href="./signup">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};

//use context. see if a user has been logged into use context. before you load a componenet you could route them.
