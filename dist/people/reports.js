"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reports;
function reports(id) {
  this.uri = this.uri + "/reports";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];