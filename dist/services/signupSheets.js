"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signupSheets;
function signupSheets(id) {
  this.uri = this.uri + "/signup_sheets";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];