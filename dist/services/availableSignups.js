"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = availableSignups;
function availableSignups(id) {
  this.uri = this.uri + "/available_signups";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];