"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eventPeriods;
function eventPeriods(id) {
  this.uri = this.uri + "/event_periods";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];