'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function formatApiRoute(apiRoot, route) {
  if (route.indexOf(apiRoot) !== -1) {
    return route;
  }

  return apiRoot + route;
}

function loadRoute(options, accessToken) {
  console.log('loadRoute', options);
  return new _bluebird2.default(function (resolve, reject) {
    if (accessToken) {
      (0, _requestPromise2.default)(options).then(resolve).catch(function (err) {
        _events2.default.emit('error', err);
        reject(err);
      });
    } else {
      reject();
    }
  });
}

var HTTP = function () {
  function HTTP() {
    _classCallCheck(this, HTTP);

    this.accessToken = null;
    this.refreshToken = null;
    this.apiRoot = 'https://api.planningcenteronline.com/services/v2';
  }

  _createClass(HTTP, [{
    key: 'get',
    value: function get(route) {
      var uri = formatApiRoute(this.apiRoot, route);
      var options = {
        uri: uri,
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        },
        json: true
      };
      return loadRoute(options, this.accessToken);
    }
  }, {
    key: 'post',
    value: function post(route, data) {
      var uri = formatApiRoute(this.apiRoot, route);
      var options = {
        uri: uri,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        },
        json: true,
        body: data
      };
      return loadRoute(options, this.accessToken);
    }
  }]);

  return HTTP;
}();

exports.default = new HTTP();
module.exports = exports['default'];