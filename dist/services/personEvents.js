"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = personEvents;
function personEvents(id) {
  this.uri = this.uri + "/person_events";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];