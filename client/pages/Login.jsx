import React from 'react';

export const LoginPage = () => {
  return (
    <div class="login-container">
      Login
      <form method="POST" action="/login">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="login"></input>
      </form>
      <a href="./signup">Sign up</a>
    </div>
  );
};
