'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('../http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attachments = function () {
  function Attachments() {
    _classCallCheck(this, Attachments);
  }

  _createClass(Attachments, [{
    key: 'getAttachmentStreamUrl',
    value: function getAttachmentStreamUrl(attachment) {
      return _http2.default.get(attachment.links.self).then(function (res) {
        return _http2.default.post(res.data.links.open);
      });
    }
  }]);

  return Attachments;
}();

exports.default = new Attachments();
module.exports = exports['default'];