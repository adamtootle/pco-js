'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _checkIns = require('./checkIns');

var _checkIns2 = _interopRequireDefault(_checkIns);

var _giving = require('./giving');

var _giving2 = _interopRequireDefault(_giving);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PCO = function PCO(config) {
  var _this = this;

  _classCallCheck(this, PCO);

  this.checkIns = function () {
    return new _checkIns2.default();
  };

  this.giving = function () {
    return new _giving2.default();
  };

  this.people = function () {
    return new _people2.default();
  };

  this.services = function () {
    return new _services2.default();
  };

  this.reloadMe = function () {
    return _this.http.get('/me');
  };

  this.on = function (eventName, listener) {
    _events2.default.on(eventName, listener);
  };

  this.clientId = config.clientId;
  this.clientSecret = config.clientSecret;

  this.http = _http2.default;
  this.http.accessToken = config.accessToken;
  this.http.refreshToken = config.refreshToken;
};

exports.default = PCO;
module.exports = exports['default'];