"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = workflowCards;
function workflowCards(id) {
  this.uri = this.uri + "/workflow_cards";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];