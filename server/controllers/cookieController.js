const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.data._id, { httpOnly: true });
  return next();
};

module.exports = cookieController;
