const request = require('request-promise');

function HTTP() {
  this.accessToken = null;
  this.refreshToken = null;
  this.apiRoot = 'https://api.planningcenteronline.com/services/v2';

  //
  // private methods
  //

  function formatApiRoute(apiRoot, route) {
    if (route.indexOf(apiRoot) != -1) {
      return route;
    }

    return apiRoot + route;
  }

  //
  // public methods
  //

  this.get = (route) => {
    const uri = formatApiRoute(this.apiRoot, route);
    var options = {
      uri,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: true,
    };
    return request(options);
  };
}

module.exports = new HTTP();
