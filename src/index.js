import http from './http';
import events from './events';
import services from './services';

class PCO {
  constructor(config) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    this.http = http;
    this.http.accessToken = config.accessToken;
    this.http.refreshToken = config.refreshToken;

    this.services = services;
  }

  reloadMe = () => this.http.get('/me');

  on = (eventName, listener) => {
    events.on(eventName, listener);
  };
}

export default PCO;
