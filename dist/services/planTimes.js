"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = planTimes;
function planTimes(id) {
  this.uri = this.uri + "/plan_times";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];