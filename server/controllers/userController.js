const User = require('../models/userModel');
const userController = {};

// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     // if a database error occurs, call next with the error message passed in
//     // for the express global error handler to catch
//     if (err)
//       return next(
//         'Error in userController.getAllUsers: ' + JSON.stringify(err)
//       );

//     // store retrieved users into res.locals and move on to next middleware
//     res.locals.users = users;
//     return next();
//   });
// };

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    console.log(req.params);
    if (!username || !password) next({ err: 'Missing Input' });

    let data = await User.create({
      username: username,
      password: password
    });
    console.log('User created');
    return next();
  } catch (err) {
    next({
      log: `Error in UserController.createUser
      ${err.message}`,
      message: { err: 'An error occurred' }
    });
  }
};

// /**
//  * verifyUser - Obtain username and password from the request body, locate
//  * the appropriate user in the database, and then authenticate the submitted password
//  * against the password stored in the database.
//  */

// userController.verifyUser = (req, res, next) => {
//   // write code here
//   const { username, password } = req.body;
//   // if user exists and if password is correct
//   User.findOne(
//     {
//       username: username,
//       password: password
//     },
//     (err, user) => {
//       if (err) {
//         return next('eerrrrrror');
//       } else {
//         console.log(user);
//         res.locals.data = user;
//         return next();
//       }
//     }
//   );
// };

module.exports = userController;
