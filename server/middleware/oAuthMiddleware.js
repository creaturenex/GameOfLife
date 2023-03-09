require('dotenv').config();
const { CLIENT_ID, GH_GOL_TOKEN, GH_PA_TOKEN } = process.env;
const axios = require('axios');

const oAuthMiddleware = {};

oAuthMiddleware.test = (req, res, next) => {
  console.log(res.body);
  return next();
};

oAuthMiddleware.login = (req, res, next) => {};

oAuthMiddleware.getGithubUserData = (req, res, next) => {
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((response) => {
      const token = response.data['access_token'];
      console.log('token:', token);
      res.locals.token = token;
      return token;
    })
    .then((token) => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('https://api.github.com/user', config).then((response) => {
        res.locals.gitInfo = response.data;
        return next();
      });
    });
};

module.exports = oAuthMiddleware;
