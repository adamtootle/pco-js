"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = annotationDrawings;
function annotationDrawings(id) {
  this.uri = this.uri + "/annotation_drawings";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];