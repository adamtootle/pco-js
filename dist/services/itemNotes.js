"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = itemNotes;
function itemNotes(id) {
  this.uri = this.uri + "/item_notes";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];