"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = itemTimes;
function itemTimes(id) {
  this.uri = this.uri + "/item_times";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];