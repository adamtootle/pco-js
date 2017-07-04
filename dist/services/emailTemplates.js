"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emailTemplates;
function emailTemplates(id) {
  this.uri = this.uri + "/email_templates";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];