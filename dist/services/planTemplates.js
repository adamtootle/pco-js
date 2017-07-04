"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = planTemplates;
function planTemplates(id) {
  this.uri = this.uri + "/plan_templates";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];