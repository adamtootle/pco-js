"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neededPositions;
function neededPositions(id) {
  this.uri = this.uri + "/needed_positions";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];