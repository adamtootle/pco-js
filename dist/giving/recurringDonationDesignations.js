"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recurringDonationDesignations;
function recurringDonationDesignations(id) {
  this.uri = this.uri + "/recurring_donation_designations";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];