'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _http = require('../http');

var _http2 = _interopRequireDefault(_http);

var _schedules = require('./schedules');

var _schedules2 = _interopRequireDefault(_schedules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPlanItems(schedule, plan) {
  var newPlan = plan;
  return new _bluebird2.default(function (resolve, reject) {
    _http2.default.get('/service_types/' + schedule.relationships.service_type.data.id + '/plans/' + plan.id + '/items?include=media,song').then(function (res) {
      newPlan.items = res.data;
      resolve(newPlan);
    }).catch(function (err) {
      reject(err);
    });
  });
}

function getPlanAttachments(schedule, plan) {
  var newPlan = plan;
  return new _bluebird2.default(function (resolve, reject) {
    _http2.default.get('/service_types/' + schedule.relationships.service_type.data.id + '/plans/' + plan.id + '/all_attachments').then(function (res) {
      newPlan.attachments = res.data;
      resolve(newPlan);
    }).catch(function (err) {
      reject(err);
    });
  });
}

var Plans = function Plans() {
  _classCallCheck(this, Plans);

  this.get = function (planId) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.get('/plans/' + planId + '?include=series').then(function (plan) {
        resolve(plan.data);
      });
    });
  };

  this.getItems = function (plan) {
    console.log('plan', plan);
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(plan.links.items + '?include=media').then(function (planItems) {
        resolve(planItems.data);
      });
    });
  };

  this.getAttachments = function (plan) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(plan.links.all_attachments).then(function (attachments) {
        resolve(attachments.data);
      });
    });
  };

  this.getSkipFilter = function (args) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.post('/people/' + args.user.id + '/skip_filter', {
        data: {
          type: 'skip',
          attributes: {},
          relationships: {
            attachment: {
              data: args.attachments.map(function (attachment) {
                return { type: 'Attachment', id: attachment.id };
              })
            },
            plan: {
              data: [{
                type: 'Plan',
                id: args.plan.id
              }]
            }
          }
        }
      }).then(function (skippedAttachments) {
        resolve(skippedAttachments.data);
      });
    });
  };
};

exports.default = new Plans();
module.exports = exports['default'];