"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizations;
function organizations(id) {
  this.uri = this.uri + "/organizations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];