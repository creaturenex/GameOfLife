const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
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

// /**
//  * Authorized routes
//  */
// app.get('/secret', sessionController.isLoggedIn, (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/secret.html'));
// });

// app.get('/secret/users', userController.getAllUsers, (req, res) => {
//   res.send({ users: res.locals.users });
// });

// /**
//  * 404 handler
//  */
// app.use('*', (req, res) => {
//   res.status(404).send('Not Found');
// });

// /**
//  * Global error handler
//  */
// app.use((err, req, res, next) => {
//   console.log(err);
//   console.log('In Global Handler');
//   res.status(500).send({ error: err });
// });
//  */

// *****************************************************************************

// listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
