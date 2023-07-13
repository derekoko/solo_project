import React, { useEffect, useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer.jsx';

export const MainPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/home/getData', {
        type: 'GET',
      });
      const response = await data.json();
      setUser(response);
    };
    fetchData();
  }, []);

  console.log(user);
  return (
    <div>
      {<div> {user.username} </div>}
      <HeaderContainer username={user.username} />
    </div>
  );
};
