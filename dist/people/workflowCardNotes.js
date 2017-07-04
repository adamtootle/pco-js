"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = workflowCardNotes;
function workflowCardNotes(id) {
  this.uri = this.uri + "/workflow_card_notes";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];