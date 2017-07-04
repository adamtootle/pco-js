'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PCORequest2 = require('../PCORequest');

var _PCORequest3 = _interopRequireDefault(_PCORequest2);

var _me = require('../me');

var _me2 = _interopRequireDefault(_me);

var _batches = require('./batches');

var _batches2 = _interopRequireDefault(_batches);

var _batchGroups = require('./batchGroups');

var _batchGroups2 = _interopRequireDefault(_batchGroups);

var _designations = require('./designations');

var _designations2 = _interopRequireDefault(_designations);

var _donations = require('./donations');

var _donations2 = _interopRequireDefault(_donations);

var _funds = require('./funds');

var _funds2 = _interopRequireDefault(_funds);

var _labels = require('./labels');

var _labels2 = _interopRequireDefault(_labels);

var _organizations = require('./organizations');

var _organizations2 = _interopRequireDefault(_organizations);

var _paymentMethods = require('./paymentMethods');

var _paymentMethods2 = _interopRequireDefault(_paymentMethods);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _recurringDonations = require('./recurringDonations');

var _recurringDonations2 = _interopRequireDefault(_recurringDonations);

var _recurringDonationDesignations = require('./recurringDonationDesignations');

var _recurringDonationDesignations2 = _interopRequireDefault(_recurringDonationDesignations);

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
    _this.batches = _batches2.default;
    _this.batchGroups = _batchGroups2.default;
    _this.designations = _designations2.default;
    _this.donations = _donations2.default;
    _this.funds = _funds2.default;
    _this.labels = _labels2.default;
    _this.organizations = _organizations2.default;
    _this.paymentMethods = _paymentMethods2.default;
    _this.people = _people2.default;
    _this.recurringDonations = _recurringDonations2.default;
    _this.recurringDonationDesignations = _recurringDonationDesignations2.default;

    _this.uri = '/giving/v2';
    return _this;
  }

  return Services;
}(_PCORequest3.default);

exports.default = Services;
module.exports = exports['default'];