import React, { useState, useEffect } from 'react';

import { SvgPreloader } from '../../common/SvgPreloader';

import { IUser } from '../../interfaces/IUser';
import { IUserDetail } from '../../interfaces/IUserDetail';

import { callToServ } from '../../api/callToServ';

interface DetailsProps {
  info: IUser | null;
}
export const Details: React.FC<DetailsProps> = ({ info }) => {
  const [user, setUser] = useState<IUserDetail | null>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const getData = async (id: string) => {
    setIsLoad(false);
    try {
      const data = await callToServ<IUserDetail>(`${process.env.REACT_APP_API_DATA}/${id}.json`, 'GET');

      setUser(data);
      setIsLoad(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!info) return;

    getData(info.id);
  }, [info]);

  if (!user) return null;

  return (
    <>
      {!isLoad ? (
        <SvgPreloader />
      ) : (
        <>
          <h2>Details</h2>
          <div className='card'>
            <img src={user.avatar} className='card-img-top' alt={user.name} />
            <div className='card-body'>
              <h5 className='card-title'>{user.name}</h5>
            </div>
            <ul className='list-group list-group-flush'>
              {Object.entries(user.details).map(([key, value], index) => (
                <li key={index} className='list-group-item'>{`${key}: ${value}`}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
