"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendedTeams;
function extendedTeams(id) {
  this.uri = this.uri + "/extended_teams";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];