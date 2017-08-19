const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  image: String,
  username: String,
  password: String,
  name: String,
  lastName: String,
  favouriteSports: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;