"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockoutDates;
function blockoutDates(id) {
  this.uri = this.uri + "/blockout_dates";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];