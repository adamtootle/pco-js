"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = workflowSteps;
function workflowSteps(id) {
  this.uri = this.uri + "/workflow_steps";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];