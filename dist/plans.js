'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _http = require('./http');

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

function getFuturePlansForSchedule(schedule) {
  return new _bluebird2.default(function (resolve, reject) {
    _http2.default.get('/service_types/' + schedule.relationships.service_type.data.id + '/plans?filter=future').then(function (res) {
      return _bluebird2.default.all(res.data.map(function (plan) {
        return getPlanItems(schedule, plan).then(getPlanAttachments(schedule, plan));
      }));
    }).then(function (plans) {
      resolve({
        schedule: schedule,
        plans: plans
      });
    }).catch(function (err) {
      reject(err);
    });
  });
}

var Plans = function Plans() {
  _classCallCheck(this, Plans);

  this.getPlan = function (planId, userId) {
    return new _bluebird2.default(function (resolve, reject) {
      _http2.default.get('/plans/' + planId + '?include=series').then(function (plan) {
        resolve({
          plan: plan.data,
          userId: userId
        });
      });
    });
  };

  this.getPlanItems = function (args) {
    return new _bluebird2.default(function (resolve, reject) {
      _http2.default.get(args.plan.links.items + '?include=media').then(function (planItems) {
        resolve(_extends({}, args, {
          planItems: planItems.data
        }));
      });
    });
  };

  this.getPlanAttachments = function (args) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(args.plan.links.all_attachments).then(function (attachmentsRes) {
        resolve(_extends({}, args, {
          planAttachments: attachmentsRes.data
        }));
      });
    });
  };

  this.getFuturePlans = function () {
    var promise = new _bluebird2.default(function (resolve) {
      _schedules2.default.getSchedules().then(function (res) {
        return _bluebird2.default.all(res.data.map(function (schedule) {
          return getFuturePlansForSchedule(schedule);
        }));
      }).then(function (schedules) {
        resolve(schedules);
      });
    });
    return promise;
  };

  this.getSkipFilter = function (args) {
    return new _bluebird2.default(function (resolve, reject) {
      _http2.default.post('/people/' + args.userId + '/skip_filter', {
        data: {
          type: 'skip',
          attributes: {},
          relationships: {
            attachment: {
              data: args.planAttachments.map(function (attachment) {
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
      }).then(function (skippedAttachmentsRes) {
        resolve(_extends({}, args, {
          skippedAttachments: skippedAttachmentsRes.data
        }));
      });
    });
  };
};

exports.default = new Plans();
module.exports = exports['default'];