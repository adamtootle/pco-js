'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PCORequest2 = require('../PCORequest');

var _PCORequest3 = _interopRequireDefault(_PCORequest2);

var _me = require('../me');

var _me2 = _interopRequireDefault(_me);

var _addresses = require('./addresses');

var _addresses2 = _interopRequireDefault(_addresses);

var _apps = require('./apps');

var _apps2 = _interopRequireDefault(_apps);

var _campuses = require('./campuses');

var _campuses2 = _interopRequireDefault(_campuses);

var _carriers = require('./carriers');

var _carriers2 = _interopRequireDefault(_carriers);

var _conditions = require('./conditions');

var _conditions2 = _interopRequireDefault(_conditions);

var _conditionResults = require('./conditionResults');

var _conditionResults2 = _interopRequireDefault(_conditionResults);

var _connectedPeople = require('./connectedPeople');

var _connectedPeople2 = _interopRequireDefault(_connectedPeople);

var _emails = require('./emails');

var _emails2 = _interopRequireDefault(_emails);

var _fieldData = require('./fieldData');

var _fieldData2 = _interopRequireDefault(_fieldData);

var _fieldDefinitions = require('./fieldDefinitions');

var _fieldDefinitions2 = _interopRequireDefault(_fieldDefinitions);

var _fieldOptions = require('./fieldOptions');

var _fieldOptions2 = _interopRequireDefault(_fieldOptions);

var _households = require('./households');

var _households2 = _interopRequireDefault(_households);

var _householdMemberships = require('./householdMemberships');

var _householdMemberships2 = _interopRequireDefault(_householdMemberships);

var _inactiveReasons = require('./inactiveReasons');

var _inactiveReasons2 = _interopRequireDefault(_inactiveReasons);

var _lists = require('./lists');

var _lists2 = _interopRequireDefault(_lists);

var _listShares = require('./listShares');

var _listShares2 = _interopRequireDefault(_listShares);

var _maritalStatuses = require('./maritalStatuses');

var _maritalStatuses2 = _interopRequireDefault(_maritalStatuses);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _messageGroups = require('./messageGroups');

var _messageGroups2 = _interopRequireDefault(_messageGroups);

var _namePrefixes = require('./namePrefixes');

var _namePrefixes2 = _interopRequireDefault(_namePrefixes);

var _nameSuffixes = require('./nameSuffixes');

var _nameSuffixes2 = _interopRequireDefault(_nameSuffixes);

var _organizations = require('./organizations');

var _organizations2 = _interopRequireDefault(_organizations);

var _organizationStatistics = require('./organizationStatistics');

var _organizationStatistics2 = _interopRequireDefault(_organizationStatistics);

var _peopleImports = require('./peopleImports');

var _peopleImports2 = _interopRequireDefault(_peopleImports);

var _peopleImportConflicts = require('./peopleImportConflicts');

var _peopleImportConflicts2 = _interopRequireDefault(_peopleImportConflicts);

var _peopleImportHistories = require('./peopleImportHistories');

var _peopleImportHistories2 = _interopRequireDefault(_peopleImportHistories);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _personApps = require('./personApps');

var _personApps2 = _interopRequireDefault(_personApps);

var _personMergers = require('./personMergers');

var _personMergers2 = _interopRequireDefault(_personMergers);

var _phoneNumbers = require('./phoneNumbers');

var _phoneNumbers2 = _interopRequireDefault(_phoneNumbers);

var _reports = require('./reports');

var _reports2 = _interopRequireDefault(_reports);

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

var _ruleResults = require('./ruleResults');

var _ruleResults2 = _interopRequireDefault(_ruleResults);

var _schoolOptions = require('./schoolOptions');

var _schoolOptions2 = _interopRequireDefault(_schoolOptions);

var _socialProfiles = require('./socialProfiles');

var _socialProfiles2 = _interopRequireDefault(_socialProfiles);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _workflows = require('./workflows');

var _workflows2 = _interopRequireDefault(_workflows);

var _workflowCards = require('./workflowCards');

var _workflowCards2 = _interopRequireDefault(_workflowCards);

var _workflowCardActivities = require('./workflowCardActivities');

var _workflowCardActivities2 = _interopRequireDefault(_workflowCardActivities);

var _workflowCardNotes = require('./workflowCardNotes');

var _workflowCardNotes2 = _interopRequireDefault(_workflowCardNotes);

var _workflowSteps = require('./workflowSteps');

var _workflowSteps2 = _interopRequireDefault(_workflowSteps);

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
    _this.addresses = _addresses2.default;
    _this.apps = _apps2.default;
    _this.campuses = _campuses2.default;
    _this.carriers = _carriers2.default;
    _this.conditions = _conditions2.default;
    _this.conditionResults = _conditionResults2.default;
    _this.connectedPeople = _connectedPeople2.default;
    _this.emails = _emails2.default;
    _this.fieldData = _fieldData2.default;
    _this.fieldDefinitions = _fieldDefinitions2.default;
    _this.fieldOptions = _fieldOptions2.default;
    _this.households = _households2.default;
    _this.householdMemberships = _householdMemberships2.default;
    _this.inactiveReasons = _inactiveReasons2.default;
    _this.lists = _lists2.default;
    _this.listShares = _listShares2.default;
    _this.maritalStatuses = _maritalStatuses2.default;
    _this.messages = _messages2.default;
    _this.messageGroups = _messageGroups2.default;
    _this.namePrefixes = _namePrefixes2.default;
    _this.nameSuffixes = _nameSuffixes2.default;
    _this.organizations = _organizations2.default;
    _this.organizationStatistics = _organizationStatistics2.default;
    _this.peopleImports = _peopleImports2.default;
    _this.peopleImportConflicts = _peopleImportConflicts2.default;
    _this.peopleImportHistories = _peopleImportHistories2.default;
    _this.people = _people2.default;
    _this.personApps = _personApps2.default;
    _this.personMergers = _personMergers2.default;
    _this.phoneNumbers = _phoneNumbers2.default;
    _this.reports = _reports2.default;
    _this.rules = _rules2.default;
    _this.ruleResults = _ruleResults2.default;
    _this.schoolOptions = _schoolOptions2.default;
    _this.socialProfiles = _socialProfiles2.default;
    _this.tabs = _tabs2.default;
    _this.workflows = _workflows2.default;
    _this.workflowCards = _workflowCards2.default;
    _this.workflowCardActivities = _workflowCardActivities2.default;
    _this.workflowCardNotes = _workflowCardNotes2.default;
    _this.workflowSteps = _workflowSteps2.default;

    _this.uri = '/people/v2';
    return _this;
  }

  return Services;
}(_PCORequest3.default);

exports.default = Services;
module.exports = exports['default'];