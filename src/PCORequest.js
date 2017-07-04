import Promise from 'bluebird';
import http from './http';

export default class PCORequest {
  constructor(args) {
    this.uri = '';
    this.params = {};
  }

  get = () => http.get(this.uri, this.params);
}
