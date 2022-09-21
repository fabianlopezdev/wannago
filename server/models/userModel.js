const mongoose = require('./index');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String,
});

module.exports = mongoose.model('users', UserSchema);
