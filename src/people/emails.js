
export default function emails(id) {
  this.uri = `${this.uri}/emails`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
