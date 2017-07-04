
export default function attachments(id) {
  this.uri = `${this.uri}/attachments`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
