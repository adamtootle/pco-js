import http from './http';
import plans from './plans';
import schedules from './schedules';
import attachments from './attachments';
import events from './events';

class PCO {
  constructor(config) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;

    this.http = http;
    this.http.accessToken = config.accessToken;
    this.http.refreshToken = config.refreshToken;

    this.plans = plans;
    this.schedules = schedules;
    this.attachments = attachments;
  }

  reloadMe = () => this.http.get('/me');

  on = (eventName, listener) => {
    events.on(eventName, listener);
  };
}

export default PCO;
