import http from './http';
import events from './events';
import CheckIns from './checkIns';
import Giving from './giving';
import People from './people';
import Services from './services';

class PCO {
  constructor(config) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    this.http = http;
    this.http.accessToken = config.accessToken;
    this.http.refreshToken = config.refreshToken;

    // this.services = services;
  }

  checkIns = () => new CheckIns();
  giving = () => new Giving();
  people = () => new People();
  services = () => new Services();

  reloadMe = () => this.http.get('/me');

  on = (eventName, listener) => {
    events.on(eventName, listener);
  };
}

export default PCO;
