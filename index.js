
function PCO(config) {

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

  this.clientId = config.clientId;
  this.clientSecret = config.clientSecret;

  this.http = require('./http');
  this.http.accessToken = config.accessToken;
  this.http.refreshToken = config.refreshToken;

  this.plans = require('./plans');
  this.schedules = require('./schedules');
  this.attachments = require('./attachments');

  //
  // public methods
  //

  this.reloadMe = (args) => this.http.get('/me');

}

module.exports = PCO;
