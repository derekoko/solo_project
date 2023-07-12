import React from 'react';
import { redirect } from 'react-router-dom';

export function CreateAccount() {
  const success = async () => {
    const response = await fetch('/api/signup/create-account');
    const statusCode = response.status;
    console.log(` THIS SHOULD BE STATUS CODE ${statusCode}`);
  };
  success();
  return (
    <div className="signup-container">
      Sign up!
      <form method="POST" action="/api/signup/create-account">
        Sumbit your username here:
        <input name="username" type="text" placeholder="Username"></input>
        upload photo here
        <input name="profilePicture" type="file" accept="image/*"></input>
        enter your most played game here
        <input name="userGame" type="text" placeholder="Game"></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>
  );
}
