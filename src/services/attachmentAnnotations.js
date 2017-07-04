export default function (id) {
  this.uri = `${this.uri}/attachment_annotations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;

  return this;
}
