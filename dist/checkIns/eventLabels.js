"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eventLabels;
function eventLabels(id) {
  this.uri = this.uri + "/event_labels";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];