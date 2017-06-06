import Promise from 'bluebird';
import request from 'request-promise';
import events from './events';

function formatApiRoute(apiRoot, route) {
  if (route.indexOf(apiRoot) !== -1) {
    return route;
  }

  return apiRoot + route;
}

function loadRoute(options, accessToken) {
  // console.log('loadRoute', options);
  return new Promise((resolve, reject) => {
    if (accessToken) {
      request(options)
        .then(resolve)
        .catch((err) => {
          events.emit('error', err);
          reject(err);
        });
    } else {
      reject();
    }
  });
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
    return loadRoute(options, this.accessToken);
  }

  post(route, data) {
    const uri = formatApiRoute(this.apiRoot, route);
    const options = {
      uri,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: true,
      body: data,
    };
    return loadRoute(options, this.accessToken);
  }
}

export default new HTTP();
