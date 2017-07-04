"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = batchGroups;
function batchGroups(id) {
  this.uri = this.uri + "/batch_groups";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];