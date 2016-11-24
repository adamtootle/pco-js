const Promise = require('bluebird');
var EventEmitter = require('events').EventEmitter;

function PCO(config) {
  //
  // private vars
  //

  var eventEmitter = new EventEmitter();

  //
  // private methods
  //

  var refreshToken = () => {
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
  this.accessToken = config.accessToken;
  this.redirectUri = config.redirectUri;

  this.http = require('./http');
  this.http.configure({
    accessToken: config.accessToken,
    refreshToken: config.refreshToken,
  });

  this.services = require('./services');
  this.plans = require('./plans');

  //
  // public methods
  //

  this.on = (eventName, listener) => {
    eventEmitter.on(eventName, listener);
  };

  this.removeListener = (eventName, listener) => {
    eventEmitter.removeListener(eventName, listener);
  };

  this.reloadMe = () => {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.planningcenteronline.com/services/v2/me')
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

module.exports = PCO;