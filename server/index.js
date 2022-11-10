require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const locationRoute = require('./routes/locations');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connected to DB!');
  } catch (error) {
    console.error(error);
  }
})();

app.use('/api/locations', locationRoute);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));