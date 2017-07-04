"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = events;
function events(id) {
  this.uri = this.uri + "/events";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];