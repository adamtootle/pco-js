"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = socialProfiles;
function socialProfiles(id) {
  this.uri = this.uri + "/social_profiles";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];