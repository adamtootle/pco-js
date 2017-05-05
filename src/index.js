import http from './http';
import plans from './plans';
import schedules from './schedules';
import attachments from './attachments';
import songs from './songs';

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
    this.songs = songs;
  }

  reloadMe = () => this.http.get('/me');
}

export default PCO;
