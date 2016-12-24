// const request = require('request-promise');
import request from 'request-promise';

function formatApiRoute(apiRoot, route) {
  if (route.indexOf(apiRoot) !== -1) {
    return route;
  }

  return apiRoot + route;
}

class HTTP {
  constructor() {
    this.accessToken = null;
    this.refreshToken = null;
    this.apiRoot = 'https://api.planningcenteronline.com/services/v2';
  }

  get(route) {
    const uri = formatApiRoute(this.apiRoot, route);
    const options = {
      uri,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: true,
    };
    return request(options);
  }

  post(route) {
    const uri = formatApiRoute(this.apiRoot, route);
    const options = {
      uri,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: true,
    };
    return request(options);
  }
}

export default new HTTP();
