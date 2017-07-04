"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messages;
function messages(id) {
  this.uri = this.uri + "/messages";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];