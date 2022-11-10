const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    min: 6,
    max: 20,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    max: 40,
  },
  passowrd: {
    type: String,
    require: true,
    min: 6,
  },
  {
    timestamps: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;