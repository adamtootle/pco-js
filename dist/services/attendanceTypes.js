"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attendanceTypes;
function attendanceTypes(id) {
  this.uri = this.uri + "/attendance_types";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];