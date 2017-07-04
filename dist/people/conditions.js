"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conditions;
function conditions(id) {
  this.uri = this.uri + "/conditions";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];