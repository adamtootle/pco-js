"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recurringDonations;
function recurringDonations(id) {
  this.uri = this.uri + "/recurring_donations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];