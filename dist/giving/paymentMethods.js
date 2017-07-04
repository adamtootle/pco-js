"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = paymentMethods;
function paymentMethods(id) {
  this.uri = this.uri + "/payment_methods";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];