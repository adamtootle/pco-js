'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function formatApiRoute(apiRoot, route) {
  if (route.indexOf(apiRoot) !== -1) {
    return route;
  }

  return apiRoot + route;
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
      return (0, _requestPromise2.default)(options);
    }
  }, {
    key: 'post',
    value: function post(route) {
      var uri = formatApiRoute(this.apiRoot, route);
      var options = {
        uri: uri,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        },
        json: true
      };
      return (0, _requestPromise2.default)(options);
    }
  }]);

  return HTTP;
}();

exports.default = new HTTP();
module.exports = exports['default'];