'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PCORequest2 = require('../PCORequest');

var _PCORequest3 = _interopRequireDefault(_PCORequest2);

var _me = require('../me');

var _me2 = _interopRequireDefault(_me);

var _attendanceTypes = require('./attendanceTypes');

var _attendanceTypes2 = _interopRequireDefault(_attendanceTypes);

var _checkIns = require('./checkIns');

var _checkIns2 = _interopRequireDefault(_checkIns);

var _checkInGroups = require('./checkInGroups');

var _checkInGroups2 = _interopRequireDefault(_checkInGroups);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _eventLabels = require('./eventLabels');

var _eventLabels2 = _interopRequireDefault(_eventLabels);

var _eventPeriods = require('./eventPeriods');

var _eventPeriods2 = _interopRequireDefault(_eventPeriods);

var _eventTimes = require('./eventTimes');

var _eventTimes2 = _interopRequireDefault(_eventTimes);

var _headcounts = require('./headcounts');

var _headcounts2 = _interopRequireDefault(_headcounts);

var _labels = require('./labels');

var _labels2 = _interopRequireDefault(_labels);

var _locations = require('./locations');

var _locations2 = _interopRequireDefault(_locations);

var _locationEventPeriods = require('./locationEventPeriods');

var _locationEventPeriods2 = _interopRequireDefault(_locationEventPeriods);

var _locationEventTimes = require('./locationEventTimes');

var _locationEventTimes2 = _interopRequireDefault(_locationEventTimes);

var _locationLabels = require('./locationLabels');

var _locationLabels2 = _interopRequireDefault(_locationLabels);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _organizations = require('./organizations');

var _organizations2 = _interopRequireDefault(_organizations);

var _passes = require('./passes');

var _passes2 = _interopRequireDefault(_passes);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _personEvents = require('./personEvents');

var _personEvents2 = _interopRequireDefault(_personEvents);

var _stations = require('./stations');

var _stations2 = _interopRequireDefault(_stations);

var _themes = require('./themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_PCORequest) {
  _inherits(Services, _PCORequest);

  function Services() {
    _classCallCheck(this, Services);

    var _this = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this));

    _this.me = _me2.default;
    _this.attendanceTypes = _attendanceTypes2.default;
    _this.checkIns = _checkIns2.default;
    _this.checkInGroups = _checkInGroups2.default;
    _this.events = _events2.default;
    _this.eventLabels = _eventLabels2.default;
    _this.eventPeriods = _eventPeriods2.default;
    _this.eventTimes = _eventTimes2.default;
    _this.headcounts = _headcounts2.default;
    _this.labels = _labels2.default;
    _this.locations = _locations2.default;
    _this.locationEventPeriods = _locationEventPeriods2.default;
    _this.locationEventTimes = _locationEventTimes2.default;
    _this.locationLabels = _locationLabels2.default;
    _this.options = _options2.default;
    _this.organizations = _organizations2.default;
    _this.passes = _passes2.default;
    _this.people = _people2.default;
    _this.personEvents = _personEvents2.default;
    _this.stations = _stations2.default;
    _this.themes = _themes2.default;

    _this.uri = '/check_ins/v2';
    return _this;
  }

  return Services;
}(_PCORequest3.default);

exports.default = Services;
module.exports = exports['default'];