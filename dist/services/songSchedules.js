"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songSchedules;
function songSchedules(id) {
  this.uri = this.uri + "/song_schedules";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];