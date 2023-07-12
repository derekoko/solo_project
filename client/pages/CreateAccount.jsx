import React from 'react';

export function CreateAccount() {
  return (
    <div className="create-user-container">
      Create Your Account!
      <form method="POST" action="/createAccount">
        <input name="username" type="text" placeholder="username"></input>
        <input name="profile-picture" type="file" accept="image/*" placeholder>
          Upload your profile picture here
        </input>
        <input
          name="user-games"
          type="password"
          placeholder="Enter your games here"
        ></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>
  );
}
