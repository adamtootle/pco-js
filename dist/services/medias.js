"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = medias;
function medias(id) {
  this.uri = this.uri + "/medias";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];