"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schoolOptions;
function schoolOptions(id) {
  this.uri = this.uri + "/school_options";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];