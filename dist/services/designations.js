"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = designations;
function designations(id) {
  this.uri = this.uri + "/designations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];