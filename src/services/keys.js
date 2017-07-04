
export default function keys(id) {
  this.uri = `${this.uri}/keys`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
