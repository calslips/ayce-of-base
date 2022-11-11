require('dotenv').config({ path: './config/.env' });
const express = require('express');
const connectDB = require('./config/database');
const locationRoute = require('./routes/locations');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/locations', locationRoute);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));