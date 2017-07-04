"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tabs;
function tabs(id) {
  this.uri = this.uri + "/tabs";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];