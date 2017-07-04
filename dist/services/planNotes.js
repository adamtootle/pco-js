"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = planNotes;
function planNotes(id) {
  this.uri = this.uri + "/plan_notes";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];