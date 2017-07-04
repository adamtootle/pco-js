"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = series;
function series(id) {
  this.uri = this.uri + "/series";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];