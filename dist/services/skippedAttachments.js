"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skippedAttachments;
function skippedAttachments(id) {
  this.uri = this.uri + "/skipped_attachments";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];