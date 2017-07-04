"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = headcounts;
function headcounts(id) {
  this.uri = this.uri + "/headcounts";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];