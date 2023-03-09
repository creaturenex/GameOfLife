require('dotenv').config();
const { CLIENT_ID, GH_GOL_TOKEN, GH_PA_TOKEN, MONGO_DB_USER, MONGO_DB_TOKEN } =
  process.env;

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;

// middleware
const oAuthMiddleware = require('./middleware/oAuthMiddleware.js');

// controllers
const userController = require('./controllers/userController.js');

//mongo connection
const MONGO_URI = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_TOKEN}@obsidian.t9bfftp.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Obsidian'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// set server configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set server to statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../index.html'))
);

app.get('/home', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/home.html'))
);

app.get('/oauth', (req, res) =>
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
  )
);

app.post('/oauth', oAuthMiddleware.test, (req, res) => res.redirect('/home'));

// need logic to verify user
app.post('/login', (req, res) => res.redirect('/home'));

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

app.post('/signup', userController.createUser, (req, res) => {
  res.redirect('/home');
});

// 404 Handler
app.use('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../client/404.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  // default error template
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  // create a new errorobj and reassign message key with 'err'
  const errorObj = Object.assign(defaultErr, err);
  // console.log() to server
  console.error('Global Error Msg:', errorObj.log);
  res.redirect('/404.html');
  return next();
});

// *****************************************************************************

// app.post(
//   '/login',
//   userController.verifyUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     res.locals.data ? res.redirect('/secret') : res.redirect('/signup');
//   }
// );

// *****************************************************************************

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
