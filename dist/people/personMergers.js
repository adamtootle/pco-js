"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = personMergers;
function personMergers(id) {
  this.uri = this.uri + "/person_mergers";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];