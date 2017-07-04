"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = layouts;
function layouts(id) {
  this.uri = this.uri + "/layouts";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];