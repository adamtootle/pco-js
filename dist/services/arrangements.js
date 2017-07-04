"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrangements;
function arrangements(id) {
  this.uri = this.uri + "/arrangements";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];