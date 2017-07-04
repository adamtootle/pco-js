"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = funds;
function funds(id) {
  this.uri = this.uri + "/funds";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];