"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationEventPeriods;
function locationEventPeriods(id) {
  this.uri = this.uri + "/location_event_periods";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];