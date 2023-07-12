import React from 'react';

export function Signup() {
  return (
    <div className="signup-container">
      Sign up!
      <form method="POST" action="/signup">
        <input name="email" type="text" placeholder="email"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirm password"
        ></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>
  );
}
