require('dotenv').config();
const { CLIENT_ID, GH_GOL_TOKEN, GH_PA_TOKEN } = process.env;
const axios = require('axios');
const path = require('path');

export const oAuth = {
  test: function (req, res, next) {
    console.log('oAuth testing is working');
    return next();
  },
  postLogin: function () {},
  getApiData: function () {
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
  }
};
