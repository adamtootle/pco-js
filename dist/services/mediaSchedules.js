"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mediaSchedules;
function mediaSchedules(id) {
  this.uri = this.uri + "/media_schedules";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];