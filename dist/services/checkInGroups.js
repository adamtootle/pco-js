"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkInGroups;
function checkInGroups(id) {
  this.uri = this.uri + "/check_in_groups";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];