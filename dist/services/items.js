"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = items;
function items(id) {
  this.uri = this.uri + "/items";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];