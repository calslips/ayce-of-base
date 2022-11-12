const express = require('express');
const flash = require('express-flash');
const logger = require('morgan');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/database');
const mainRoute = require('./routes/main');
const locationRoute = require('./routes/locations');
require('dotenv').config({ path: './config/.env' });
require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECTION_STRING }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', mainRoute);
app.use('/api/locations', locationRoute);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));