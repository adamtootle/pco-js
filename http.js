
const request = require('request-promise');

function HTTP() {
  this.accessToken = null;
  this.refreshToken = null;

  this.configure = (config) => {
    this.accessToken = config.accessToken;
    this.refreshToken = config.refreshToken;
  };

  this.get = (uri) => {
    var options = {
      uri,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      json: true,
    };
    return request(options);

    // .catch((err) => {
    //   if (err.statusCode === 401) {
    //     auth.refreshToken()
    //       .then(() => this.get(uri))
    //       .then((res) => {
    //         deferred.resolve(res);
    //       })
    //       .catch((err2) => {
    //         deferred.reject(err2);
    //       });
    //   }
    // });
  };
}

module.exports = new HTTP();
