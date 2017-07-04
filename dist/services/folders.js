"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = folders;
function folders(id) {
  this.uri = this.uri + "/folders";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];