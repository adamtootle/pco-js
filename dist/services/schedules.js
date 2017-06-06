'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('../http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schedules = function Schedules() {
  _classCallCheck(this, Schedules);

  this.getSchedules = function () {
    return _http2.default.get('/me/schedules');
  };
};

exports.default = new Schedules();
module.exports = exports['default'];