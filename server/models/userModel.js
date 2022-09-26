const mongoose = require('./index');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true },
    _id: String,
  }, 
);

module.exports = mongoose.model('users', UserSchema);

