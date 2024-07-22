import { Request } from 'express';

export interface User {
  _id?: string;
  email: string;
  password: string;
  role: string;
}

export interface UsersDetails {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  bio: string;
  userId: string;
  email: string;
  userName: string;
}

export interface CustomRequest extends Request {
  user: {
    _id: string;
  };
}
