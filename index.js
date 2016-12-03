const http = require('./http');

function PCO(config) {

  this.clientId = config.clientId;
  this.clientSecret = config.clientSecret;
  http.accessToken = config.accessToken;
  http.refreshToken = config.refreshToken;

  //
  // private methods
  //

  var refreshAccessToken = () => {
    return request({
      uri: 'https://api.planningcenteronline.com/oauth/token',
      method: 'POST',
      form: {
        grant_type: 'refresh_token',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: this.refreshToken,
        redirect_uri: this.redirectUri,
      },
      json: true,
    });
  };

  //
  // public vars
  //

  this.plans = require('./plans');
  this.schedules = require('./schedules');

  //
  // public methods
  //

  this.reloadMe = (args) => http.get('/me');

}

module.exports = PCO;
