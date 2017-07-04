"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockoutExceptions;
function blockoutExceptions(id) {
  this.uri = this.uri + "/blockout_exceptions";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];