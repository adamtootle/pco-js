"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = householdMemberships;
function householdMemberships(id) {
  this.uri = this.uri + "/household_memberships";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];