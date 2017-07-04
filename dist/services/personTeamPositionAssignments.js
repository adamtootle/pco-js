"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = personTeamPositionAssignments;
function personTeamPositionAssignments(id) {
  this.uri = this.uri + "/person_team_position_assignments";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];