"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = personApps;
function personApps(id) {
  this.uri = this.uri + "/person_apps";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];