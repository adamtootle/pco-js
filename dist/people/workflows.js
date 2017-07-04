"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = workflows;
function workflows(id) {
  this.uri = this.uri + "/workflows";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];