"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apps;
function apps(id) {
  this.uri = this.uri + "/apps";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];