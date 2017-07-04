"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eventTimes;
function eventTimes(id) {
  this.uri = this.uri + "/event_times";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];