
export default function attachmentAnnotations(id) {
  this.uri = `${this.uri}/attachment_annotations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
