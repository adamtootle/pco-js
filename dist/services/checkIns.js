"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIns;
function checkIns(id) {
  this.uri = this.uri + "/check_ins";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];