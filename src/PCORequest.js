import Promise from 'bluebird';
import http from './http';

export default class PCORequest {
  constructor() {
    this.uri = '/services/v2';
    this.params = {};
  }

  get = () => http.get(this.uri, this.params);
}
