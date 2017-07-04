"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lists;
function lists(id) {
  this.uri = this.uri + "/lists";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];