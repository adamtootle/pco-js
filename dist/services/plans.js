'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _http = require('../http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(plan.links.items + '?include=media').then(function (planItems) {
        resolve(planItems.data);
      });
    });
  };

  this.getAttachments = function (plan) {
    return new _bluebird2.default(function (resolve) {
      _http2.default.get(plan.links.all_attachments + '?per_page=100').then(function (attachments) {
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