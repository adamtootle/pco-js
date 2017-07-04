"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fieldOptions;
function fieldOptions(id) {
  this.uri = this.uri + "/field_options";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];