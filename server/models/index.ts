import mongoose from 'mongoose';
import DB_URL from '../config';

mongoose.connect(DB_URL.DB_URL);

mongoose.connection.on(
  'error',
  // tslint:disable-next-line:no-console
  console.error.bind(console, 'Not connected to MongoDB')
);
mongoose.connection.once('open', () =>
// tslint:disable-next-line:no-console
console.log('Connected to MongoDB'));

export default mongoose;

