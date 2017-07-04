"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = donations;
function donations(id) {
  this.uri = this.uri + "/donations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];