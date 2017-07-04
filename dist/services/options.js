"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;
function options(id) {
  this.uri = this.uri + "/options";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];