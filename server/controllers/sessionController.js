const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // console.log(req.cookies.ssid);
  // console.log(Session.findOne({ cookieId: req.cookies.ssid }));

  // Session.findOne({ cookieId: req.cookies.ssid }, (err, data) => {
  //   console.log('inside idLoggedIn', req.cookies);
  //   console.log(data);
  //   if (data) next();
  //   else res.redirect('/signup');
  // });
  // redirect from here or save to res.local
  next();
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.data._id });
  next();
};

module.exports = sessionController;
