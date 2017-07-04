"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamLeaders;
function teamLeaders(id) {
  this.uri = this.uri + "/team_leaders";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];