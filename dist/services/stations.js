"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stations;
function stations(id) {
  this.uri = this.uri + "/stations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];