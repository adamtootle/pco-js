"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationLabels;
function locationLabels(id) {
  this.uri = this.uri + "/location_labels";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];