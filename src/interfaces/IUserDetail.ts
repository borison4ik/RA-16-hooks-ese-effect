import { IUser } from './IUser';

export interface IUserDetail extends IUser {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}
