"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serviceTypes;
function serviceTypes(id) {
  this.uri = this.uri + "/service_types";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];