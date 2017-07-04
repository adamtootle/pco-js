"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationEventTimes;
function locationEventTimes(id) {
  this.uri = this.uri + "/location_event_times";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];