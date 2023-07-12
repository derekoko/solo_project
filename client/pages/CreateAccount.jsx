import React from 'react';

export function CreateAccount() {
  return (
    <div className="signup-container">
      Sign up!
      <form method="POST" action="/api/signup/create-account">
        Sumbit your username here:
        <input name="username" type="text" placeholder="Username"></input>
        upload photo here
        <input name="profilePicture" type="file"></input>
        enter your most played game here
        <input name="gameList" type="text" placeholder="Game"></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>
  );
}
