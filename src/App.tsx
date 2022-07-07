import React, { useState, useEffect } from 'react';

import { List } from './components/List';
import { Details } from './components/Details';

import { IUser } from './interfaces/IUser';

import { callToServ } from './api/callToServ';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [detailUser, setDetailUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const data = await callToServ<IUser[]>(`${process.env.REACT_APP_API_DATA}/users.json`, 'GET');
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const selectUserHandler = (id: string) => {
    const user = users.find((user) => user.id === id);
    if (user) setDetailUser(user);
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <List users={users} onSelect={selectUserHandler} />
          </div>
          <div className='col-8'>
            <Details info={detailUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
