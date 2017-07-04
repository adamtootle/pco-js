'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PCORequest2 = require('../PCORequest');

var _PCORequest3 = _interopRequireDefault(_PCORequest2);

var _me = require('../me');

var _me2 = _interopRequireDefault(_me);

var _annotationDrawings = require('./annotationDrawings');

var _annotationDrawings2 = _interopRequireDefault(_annotationDrawings);

var _arrangements = require('./arrangements');

var _arrangements2 = _interopRequireDefault(_arrangements);

var _attachments = require('./attachments');

var _attachments2 = _interopRequireDefault(_attachments);

var _attachmentActivities = require('./attachmentActivities');

var _attachmentActivities2 = _interopRequireDefault(_attachmentActivities);

var _attachmentAnnotations = require('./attachmentAnnotations');

var _attachmentAnnotations2 = _interopRequireDefault(_attachmentAnnotations);

var _attachmentTypes = require('./attachmentTypes');

var _attachmentTypes2 = _interopRequireDefault(_attachmentTypes);

var _availableSignups = require('./availableSignups');

var _availableSignups2 = _interopRequireDefault(_availableSignups);

var _backgroundChecks = require('./backgroundChecks');

var _backgroundChecks2 = _interopRequireDefault(_backgroundChecks);

var _blockouts = require('./blockouts');

var _blockouts2 = _interopRequireDefault(_blockouts);

var _blockoutDates = require('./blockoutDates');

var _blockoutDates2 = _interopRequireDefault(_blockoutDates);

var _blockoutExceptions = require('./blockoutExceptions');

var _blockoutExceptions2 = _interopRequireDefault(_blockoutExceptions);

var _checkIns = require('./checkIns');

var _checkIns2 = _interopRequireDefault(_checkIns);

var _contributors = require('./contributors');

var _contributors2 = _interopRequireDefault(_contributors);

var _emailTemplates = require('./emailTemplates');

var _emailTemplates2 = _interopRequireDefault(_emailTemplates);

var _emailTemplateRenderedResponses = require('./emailTemplateRenderedResponses');

var _emailTemplateRenderedResponses2 = _interopRequireDefault(_emailTemplateRenderedResponses);

var _extendedTeams = require('./extendedTeams');

var _extendedTeams2 = _interopRequireDefault(_extendedTeams);

var _folders = require('./folders');

var _folders2 = _interopRequireDefault(_folders);

var _items = require('./items');

var _items2 = _interopRequireDefault(_items);

var _itemNotes = require('./itemNotes');

var _itemNotes2 = _interopRequireDefault(_itemNotes);

var _itemNoteCategories = require('./itemNoteCategories');

var _itemNoteCategories2 = _interopRequireDefault(_itemNoteCategories);

var _itemTimes = require('./itemTimes');

var _itemTimes2 = _interopRequireDefault(_itemTimes);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _layouts = require('./layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _medias = require('./medias');

var _medias2 = _interopRequireDefault(_medias);

var _mediaSchedules = require('./mediaSchedules');

var _mediaSchedules2 = _interopRequireDefault(_mediaSchedules);

var _neededPositions = require('./neededPositions');

var _neededPositions2 = _interopRequireDefault(_neededPositions);

var _organizations = require('./organizations');

var _organizations2 = _interopRequireDefault(_organizations);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _personTeamPositionAssignments = require('./personTeamPositionAssignments');

var _personTeamPositionAssignments2 = _interopRequireDefault(_personTeamPositionAssignments);

var _plans = require('./plans');

var _plans2 = _interopRequireDefault(_plans);

var _planNotes = require('./planNotes');

var _planNotes2 = _interopRequireDefault(_planNotes);

var _planNoteCategories = require('./planNoteCategories');

var _planNoteCategories2 = _interopRequireDefault(_planNoteCategories);

var _planPeople = require('./planPeople');

var _planPeople2 = _interopRequireDefault(_planPeople);

var _planPersonTimes = require('./planPersonTimes');

var _planPersonTimes2 = _interopRequireDefault(_planPersonTimes);

var _planTemplates = require('./planTemplates');

var _planTemplates2 = _interopRequireDefault(_planTemplates);

var _planTimes = require('./planTimes');

var _planTimes2 = _interopRequireDefault(_planTimes);

var _schedules = require('./schedules');

var _schedules2 = _interopRequireDefault(_schedules);

var _scheduledPeople = require('./scheduledPeople');

var _scheduledPeople2 = _interopRequireDefault(_scheduledPeople);

var _series = require('./series');

var _series2 = _interopRequireDefault(_series);

var _serviceTypes = require('./serviceTypes');

var _serviceTypes2 = _interopRequireDefault(_serviceTypes);

var _signupSheets = require('./signupSheets');

var _signupSheets2 = _interopRequireDefault(_signupSheets);

var _signupSheetMetadata = require('./signupSheetMetadata');

var _signupSheetMetadata2 = _interopRequireDefault(_signupSheetMetadata);

var _skippedAttachments = require('./skippedAttachments');

var _skippedAttachments2 = _interopRequireDefault(_skippedAttachments);

var _songs = require('./songs');

var _songs2 = _interopRequireDefault(_songs);

var _songSchedules = require('./songSchedules');

var _songSchedules2 = _interopRequireDefault(_songSchedules);

var _splitTeamRehearsalAssignments = require('./splitTeamRehearsalAssignments');

var _splitTeamRehearsalAssignments2 = _interopRequireDefault(_splitTeamRehearsalAssignments);

var _tags = require('./tags');

var _tags2 = _interopRequireDefault(_tags);

var _tagGroups = require('./tagGroups');

var _tagGroups2 = _interopRequireDefault(_tagGroups);

var _teams = require('./teams');

var _teams2 = _interopRequireDefault(_teams);

var _teamLeaders = require('./teamLeaders');

var _teamLeaders2 = _interopRequireDefault(_teamLeaders);

var _teamPositions = require('./teamPositions');

var _teamPositions2 = _interopRequireDefault(_teamPositions);

var _textSettings = require('./textSettings');

var _textSettings2 = _interopRequireDefault(_textSettings);

var _timePreferenceOptions = require('./timePreferenceOptions');

var _timePreferenceOptions2 = _interopRequireDefault(_timePreferenceOptions);

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
    _this.annotationDrawings = _annotationDrawings2.default;
    _this.arrangements = _arrangements2.default;
    _this.attachments = _attachments2.default;
    _this.attachmentActivities = _attachmentActivities2.default;
    _this.attachmentAnnotations = _attachmentAnnotations2.default;
    _this.attachmentTypes = _attachmentTypes2.default;
    _this.availableSignups = _availableSignups2.default;
    _this.backgroundChecks = _backgroundChecks2.default;
    _this.blockouts = _blockouts2.default;
    _this.blockoutDates = _blockoutDates2.default;
    _this.blockoutExceptions = _blockoutExceptions2.default;
    _this.checkIns = _checkIns2.default;
    _this.contributors = _contributors2.default;
    _this.emailTemplates = _emailTemplates2.default;
    _this.emailTemplateRenderedResponses = _emailTemplateRenderedResponses2.default;
    _this.extendedTeams = _extendedTeams2.default;
    _this.folders = _folders2.default;
    _this.items = _items2.default;
    _this.itemNotes = _itemNotes2.default;
    _this.itemNoteCategories = _itemNoteCategories2.default;
    _this.itemTimes = _itemTimes2.default;
    _this.keys = _keys2.default;
    _this.layouts = _layouts2.default;
    _this.medias = _medias2.default;
    _this.mediaSchedules = _mediaSchedules2.default;
    _this.neededPositions = _neededPositions2.default;
    _this.organizations = _organizations2.default;
    _this.people = _people2.default;
    _this.personTeamPositionAssignments = _personTeamPositionAssignments2.default;
    _this.plans = _plans2.default;
    _this.planNotes = _planNotes2.default;
    _this.planNoteCategories = _planNoteCategories2.default;
    _this.planPeople = _planPeople2.default;
    _this.planPersonTimes = _planPersonTimes2.default;
    _this.planTemplates = _planTemplates2.default;
    _this.planTimes = _planTimes2.default;
    _this.schedules = _schedules2.default;
    _this.scheduledPeople = _scheduledPeople2.default;
    _this.series = _series2.default;
    _this.serviceTypes = _serviceTypes2.default;
    _this.signupSheets = _signupSheets2.default;
    _this.signupSheetMetadata = _signupSheetMetadata2.default;
    _this.skippedAttachments = _skippedAttachments2.default;
    _this.songs = _songs2.default;
    _this.songSchedules = _songSchedules2.default;
    _this.splitTeamRehearsalAssignments = _splitTeamRehearsalAssignments2.default;
    _this.tags = _tags2.default;
    _this.tagGroups = _tagGroups2.default;
    _this.teams = _teams2.default;
    _this.teamLeaders = _teamLeaders2.default;
    _this.teamPositions = _teamPositions2.default;
    _this.textSettings = _textSettings2.default;
    _this.timePreferenceOptions = _timePreferenceOptions2.default;

    _this.uri = '/services/v2';
    return _this;
  }

  return Services;
}(_PCORequest3.default);

exports.default = Services;
module.exports = exports['default'];