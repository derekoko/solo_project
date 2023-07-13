import React from 'react';

export function Signup() {
  return (
    <div className="signup-main-container">
      <div>
        Sign up!
        <form method="POST" action="/api/signup">
          <input name="email" type="text" placeholder="email"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
          ></input>
          <input type="submit" value="create user"></input>
        </form>
        <a href="./login"></a>
      </div>
    </div>
  );
}
