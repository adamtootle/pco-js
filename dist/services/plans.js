"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plans;
function plans(id) {
  this.uri = this.uri + "/plans";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];