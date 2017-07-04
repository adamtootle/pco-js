"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messageGroups;
function messageGroups(id) {
  this.uri = this.uri + "/message_groups";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];