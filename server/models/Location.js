const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  restaurant: {
    type: String,
    require: true,
    min: 2,
  },
  cuisine: {
    type: String,
    require: true,
    min: 2,
  },
  description: {
    type: String,
    require: true,
    min: 2,
  },
  rating: {
    type: Number,
    require: true,
    min: 0,
    max: 5,
  },
  lat: {
    type: Number,
    require: true,
  },
  long: {
    type: Number,
    require: true,
  },
  {
    timestamps: true,
  },
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;