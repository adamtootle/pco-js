"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ruleResults;
function ruleResults(id) {
  this.uri = this.uri + "/rule_results";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];