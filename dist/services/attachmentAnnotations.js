"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attachmentAnnotations;
function attachmentAnnotations(id) {
  this.uri = this.uri + "/attachment_annotations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];