"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attachments;
function attachments(id) {
  this.uri = this.uri + "/attachments";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];