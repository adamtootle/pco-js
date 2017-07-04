
export default function tabs(id) {
  this.uri = `${this.uri}/tabs`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
