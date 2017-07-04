"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = households;
function households(id) {
  this.uri = this.uri + "/households";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];