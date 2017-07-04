"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tags;
function tags(id) {
  this.uri = this.uri + "/tags";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];