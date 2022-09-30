import mongoose from './index';
const Schema = mongoose.Schema;

export interface UserIF {
  name: string,
  email: string,
  _id: string
}

const UserSchema = new Schema<UserIF>(
  {
    name: String,
    email: { type: String, required: true },
    _id: String,
  },
);

export default mongoose.model<UserIF>('users', UserSchema);

