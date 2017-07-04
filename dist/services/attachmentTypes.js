"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = attachmentTypes;
function attachmentTypes(id) {
  this.uri = this.uri + "/attachment_types";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];