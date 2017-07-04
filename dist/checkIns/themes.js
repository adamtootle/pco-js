"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = themes;
function themes(id) {
  this.uri = this.uri + "/themes";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];