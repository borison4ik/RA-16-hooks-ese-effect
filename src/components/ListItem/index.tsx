import React from 'react';
import classNames from 'classnames';

import { IUser } from '../../interfaces/IUser';

interface IListItemProps extends IUser {
  selected: boolean;
  onSelect(id: string): void;
}
export const ListItem: React.FC<IListItemProps> = ({ name, id, selected, onSelect }) => {
  const clickHandler = (id: string) => {
    onSelect(id);
  };
  return (
    <li className={classNames('list-group-item', { active: selected })} aria-current='true' onClick={() => clickHandler(id)}>
      {name}
    </li>
  );
};
