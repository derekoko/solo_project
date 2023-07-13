import React, { useEffect, useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer.jsx';
import { SwipeContainer } from '../containers/SwipeContainer.jsx';

export const MainPage = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetcher() {
      const users = await fetchUsers();
      const user = await fetchData();
      setUsers(users);
      setUser(user);
    }
    fetcher();
  }, []);

  return (
    <>
      <header className="header-container">
        <HeaderContainer user={user} />
      </header>
      <div className="main-page">
        <SwipeContainer users={users} user={user} />
      </div>
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
