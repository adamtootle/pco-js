"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keys;
function keys(id) {
  this.uri = this.uri + "/keys";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];