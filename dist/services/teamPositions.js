"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamPositions;
function teamPositions(id) {
  this.uri = this.uri + "/team_positions";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];