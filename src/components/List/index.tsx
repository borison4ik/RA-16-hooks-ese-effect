import React, { useState } from 'react';

import { ListItem } from '../ListItem';

import { IUser } from '../../interfaces/IUser';

interface ListProps {
  users: IUser[];
  onSelect(id: string): void;
}

export const List: React.FC<ListProps> = ({ users, onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectHandler = (id: string) => {
    setSelectedId(id);
    onSelect(id);
  };

  return (
    <>
      <h2>List</h2>
      <ul className='list-group'>
        {users.map((user) => (
          <ListItem key={user.id} {...user} selected={selectedId === user.id} onSelect={selectHandler} />
        ))}
      </ul>
    </>
  );
};
