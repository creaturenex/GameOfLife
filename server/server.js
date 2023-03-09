const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//FOR LOCAL MONGO CONNECTION
// sudo service mongod start
// sudo service mongod stop
// const mongoURI = 'mongodb://localhost:27017';
// mongoose.connect(mongoURI);

// create a router for views

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/signup.html'));
});

app.post('/login', (req, res) => {
  res.redirect('/home');
});

// Authorized routes
// app.get('/secret', sessionController.isLoggedIn, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/secret.html'));
// });

app.get('/home', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/home.html'));
});

// 404 Handler
app.use('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../client/404.html'));
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  console.log('In Global Handler');
  res.status(500).send({ error: err });
});

// *****************************************************************************
/***
 * /**
 * --- Express Routes ---
 * Express will attempt to match these routes in the order they are declared here.
 * If a route handler / middleware handles a request and sends a response without
 * calling `next()`, then none of the route handlers after that route will run!
 * This can be very useful for adding authorization to certain routes...
 */

// /**
//  * root
//  */
// app.get('/', cookieController.setCookie, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

// /**
//  * signup
//  */
// app.get('/signup', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/signup.html'));
// });

// app.post('/signup', userController.createUser, (req, res) => {
//   // what should happen here on successful sign up?
//   res.redirect('/secret');
// });

// /**
//  * login
//  */
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

// listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
