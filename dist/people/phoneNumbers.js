"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = phoneNumbers;
function phoneNumbers(id) {
  this.uri = this.uri + "/phone_numbers";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];