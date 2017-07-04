"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = planPersonTimes;
function planPersonTimes(id) {
  this.uri = this.uri + "/plan_person_times";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];