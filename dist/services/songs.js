"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songs;
function songs(id) {
  this.uri = this.uri + "/songs";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];