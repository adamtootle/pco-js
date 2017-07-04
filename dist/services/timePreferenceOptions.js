"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timePreferenceOptions;
function timePreferenceOptions(id) {
  this.uri = this.uri + "/time_preference_options";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];