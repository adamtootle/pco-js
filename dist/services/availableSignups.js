"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (id) {
  this.uri = this.uri + "/available_signups";
  this.uri = id ? this.uri + "/" + id : this.uri;

  return this;
};

module.exports = exports["default"];