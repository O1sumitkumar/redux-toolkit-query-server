import { UsersDetails } from '@/interfaces/users.interface';
import { Document, Schema, Types, model } from 'mongoose';

const UserDetailsSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, ref: 'User', unique: true },
  bio: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  profileImage: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: 'User', required: true, unique: true },
});

export const UserDetailsModel = model<UsersDetails & Document>('UsersDetails', UserDetailsSchema);
