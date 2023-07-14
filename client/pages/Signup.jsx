import React from 'react';

export function Signup() {
  return (
    <div className="signup-main-container">
      <div className="signup-container">
        Sign up!
        <form method="POST" action="/api/signup">
          <input name="email" type="text" placeholder="email"></input> <br />
          <input name="password" type="password" placeholder="password"></input>
          <br />
          <input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
          ></input>
          <br />
          <input type="submit" value="create user"></input>
        </form>
        <a href="./login">Back to Login</a>
      </div>
    </div>
  );
}
