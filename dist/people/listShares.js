"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listShares;
function listShares(id) {
  this.uri = this.uri + "/list_shares";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];