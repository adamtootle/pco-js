'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _plans = require('./plans');

var _plans2 = _interopRequireDefault(_plans);

var _schedules = require('./schedules');

var _schedules2 = _interopRequireDefault(_schedules);

var _attachments = require('./attachments');

var _attachments2 = _interopRequireDefault(_attachments);

var _songs = require('./songs');

var _songs2 = _interopRequireDefault(_songs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PCO = function PCO(config) {
  var _this = this;

  _classCallCheck(this, PCO);

  this.reloadMe = function () {
    return _this.http.get('/me');
  };

  this.clientId = config.clientId;
  this.clientSecret = config.clientSecret;

  this.http = _http2.default;
  this.http.accessToken = config.accessToken;
  this.http.refreshToken = config.refreshToken;

  this.plans = _plans2.default;
  this.schedules = _schedules2.default;
  this.attachments = _attachments2.default;
  this.songs = _songs2.default;
};

exports.default = PCO;
module.exports = exports['default'];