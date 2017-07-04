"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fieldDefinitions;
function fieldDefinitions(id) {
  this.uri = this.uri + "/field_definitions";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];