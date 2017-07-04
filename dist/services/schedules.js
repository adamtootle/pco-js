"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schedules;
function schedules(id) {
  this.uri = this.uri + "/schedules";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];