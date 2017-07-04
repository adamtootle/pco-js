"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teams;
function teams(id) {
  this.uri = this.uri + "/teams";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];