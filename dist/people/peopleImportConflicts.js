"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = peopleImportConflicts;
function peopleImportConflicts(id) {
  this.uri = this.uri + "/people_import_conflicts";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];