"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contributors;
function contributors(id) {
  this.uri = this.uri + "/contributors";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];