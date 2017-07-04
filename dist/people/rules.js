"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rules;
function rules(id) {
  this.uri = this.uri + "/rules";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];