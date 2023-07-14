import React from 'react';
import { redirect } from 'react-router-dom';

export function CreateAccount() {
  // const success = async () => {
  //   const response = await fetch('/api/signup/create-account', {
  //     method: 'GET',
  //   });
  //   const statusCode = response.status;
  //   console.log(` THIS SHOULD BE STATUS CODE ${statusCode}`);
  // };
  // success();
  return (
    <div className="create-main-container">
      <div className="create-container">
        Create Profile
        <form method="POST" action="/api/signup/create-account">
          Submit your username here: <br />
          <input
            name="username"
            type="text"
            placeholder="Username"
          ></input>{' '}
          <br />
          upload photo here <br />
          <input
            name="profilePicture"
            type="file"
            accept="image/*"
          ></input>{' '}
          <br />
          enter your most played game here <br />
          <input name="userGame" type="text" placeholder="Game"></input> <br />
          Enter your Bio here:
          <br />
          <input name="bio" type="text" placeholder="Bio"></input> <br />
          <input type="submit" value="create user"></input>
        </form>
      </div>
    </div>
  );
}
