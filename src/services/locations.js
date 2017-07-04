
export default function locations(id) {
  this.uri = `${this.uri}/locations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
