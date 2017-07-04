"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = labels;
function labels(id) {
  this.uri = this.uri + "/labels";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];