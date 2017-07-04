
export default function attachmentTypes(id) {
  this.uri = `${this.uri}/attachment_types`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
