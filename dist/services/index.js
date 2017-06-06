'use strict';

var _schedules = require('./schedules');

var _schedules2 = _interopRequireDefault(_schedules);

var _plans = require('./plans');

var _plans2 = _interopRequireDefault(_plans);

var _attachments = require('./attachments');

var _attachments2 = _interopRequireDefault(_attachments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  schedules: _schedules2.default,
  plans: _plans2.default,
  attachments: _attachments2.default
};