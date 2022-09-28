const mongoose = require('mongoose');

const { DB_URL } = require('../config');

mongoose.connect(DB_URL);

mongoose.connection.on(
  'error',
  console.error.bind(console, 'Not connected to MongoDB')
);
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;

