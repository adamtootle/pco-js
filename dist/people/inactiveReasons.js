"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inactiveReasons;
function inactiveReasons(id) {
  this.uri = this.uri + "/inactive_reasons";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];