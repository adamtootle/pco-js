"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conditionResults;
function conditionResults(id) {
  this.uri = this.uri + "/condition_results";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];