'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PCORequest = function PCORequest(args) {
  var _this = this;

  _classCallCheck(this, PCORequest);

  this.get = function () {
    return _http2.default.get(_this.uri, _this.params);
  };

  this.uri = '';
  this.params = {};
};

exports.default = PCORequest;
module.exports = exports['default'];