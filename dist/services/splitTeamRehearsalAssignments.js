"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitTeamRehearsalAssignments;
function splitTeamRehearsalAssignments(id) {
  this.uri = this.uri + "/split_team_rehearsal_assignments";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];