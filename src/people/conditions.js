
export default function conditions(id) {
  this.uri = `${this.uri}/conditions`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
