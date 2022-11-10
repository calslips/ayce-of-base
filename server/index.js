require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Connected to DB!');
  } catch (error) {
    console.error(error);
  }
})();

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));