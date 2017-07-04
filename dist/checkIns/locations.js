"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locations;
function locations(id) {
  this.uri = this.uri + "/locations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];