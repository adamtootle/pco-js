'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

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

  this.getPlan = function (args) {
    return new _bluebird2.default(function (resolve, reject) {
      _http2.default.get('/service_types/' + args.serviceTypeId + '/plans/' + args.planId).then(function (plan) {
        resolve({
          plan: plan
        });
      });
    });
  };

  this.getPlanItems = function (args) {
    return new _bluebird2.default(function (resolve, reject) {
      _http2.default.get(args.plan.data.links.items).then(function (planItems) {
        resolve({
          plan: args.plan,
          planItems: planItems
        });
      });
    });
  };

  this.getPlanAttachments = function (args) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(args.plan.data.links.all_attachments).then(function (planAttachments) {
        resolve({
          plan: args.plan,
          planItems: args.planItems,
          planAttachments: planAttachments
        });
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
};

exports.default = new Plans();
module.exports = exports['default'];