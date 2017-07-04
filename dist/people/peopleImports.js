"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = peopleImports;
function peopleImports(id) {
  this.uri = this.uri + "/people_imports";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];