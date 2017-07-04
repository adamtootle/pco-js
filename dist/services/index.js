'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PCORequest2 = require('../PCORequest');

var _PCORequest3 = _interopRequireDefault(_PCORequest2);

var _plans = require('./plans');

var _plans2 = _interopRequireDefault(_plans);

var _organizations = require('./organizations');

var _organizations2 = _interopRequireDefault(_organizations);

var _annotationDrawings = require('./annotationDrawings');

var _annotationDrawings2 = _interopRequireDefault(_annotationDrawings);

var _attachments = require('./attachments');

var _attachments2 = _interopRequireDefault(_attachments);

var _schedules = require('./schedules');

var _schedules2 = _interopRequireDefault(_schedules);

var _me = require('./me');

var _me2 = _interopRequireDefault(_me);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_PCORequest) {
  _inherits(Services, _PCORequest);

  function Services() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Services);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Services.__proto__ || Object.getPrototypeOf(Services)).call.apply(_ref, [this].concat(args))), _this), _this.annotationDrawings = _annotationDrawings2.default, _this.attachments = _attachments2.default, _this.schedules = _schedules2.default, _this.me = _me2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Services;
}(_PCORequest3.default);

exports.default = Services;
module.exports = exports['default'];