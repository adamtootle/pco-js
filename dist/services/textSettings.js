"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textSettings;
function textSettings(id) {
  this.uri = this.uri + "/text_settings";
  this.uri = id ? this.uri + "/" + id : this.uri;
  return this;
}
module.exports = exports["default"];