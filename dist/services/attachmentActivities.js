"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (attachmentAnnotationId) {
  this.uri = this.uri + "/attachment_annotations";
  this.uri = attachmentAnnotationId ? this.uri + "/" + attachmentAnnotationId : this.uri;

  return this;
};

module.exports = exports["default"];