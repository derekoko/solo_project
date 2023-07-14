import React, { useEffect, useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer.jsx';
import { SwipeContainer } from '../containers/SwipeContainer.jsx';
import FriendsContainer from '../containers/FriendsContainer.jsx';

export const MainPage = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [friendClicked, setClick] = useState(false);

  useEffect(() => {
    async function fetcher() {
      const users = await fetchUsers();
      const user = await fetchData();
      setUsers(users);
      setUser(user);
    }
    fetcher();
  }, [friendClicked]);

  function conditionalLoad() {
    try {
      if (!friendClicked) {
        return <SwipeContainer users={users} user={user} />;
      } else {
        return <FriendsContainer user={user} />;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <header className="header-container">
        <HeaderContainer
          user={user}
          setFriendClick={setClick}
          friendClicked={friendClicked}
        />
      </header>
      <div className="main-page">{conditionalLoad()}</div>
    </>
  );
};

const fetchUsers = async () => {
  const data = await fetch('/api/home/getUsers', {
    type: 'GET',
  });
  const response = await data.json();
  return response;
};

const fetchData = async () => {
  const data = await fetch('/api/home/getData', {
    type: 'GET',
  });
  const response = await data.json();
  return response;
};
