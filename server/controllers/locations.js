const Location = require('../models/Location');

module.exports = {
  createLocation: async (req, res) => {
    const newLocation = new Location(req.body);
    try {
      const savedLocation = await newLocation.save();
      res.status(200).json(savedLocation);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
  getAllLocations: async (req, res) => {
    try{
      const allLocations = await Location.find({}).lean();
      res.status(200).json(allLocations);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
}