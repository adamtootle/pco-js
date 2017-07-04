"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emails;
function emails(id) {
  this.uri = this.uri + "/emails";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];