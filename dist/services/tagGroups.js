"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tagGroups;
function tagGroups(id) {
  this.uri = this.uri + "/tag_groups";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];