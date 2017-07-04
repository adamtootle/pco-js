
export default function stations(id) {
  this.uri = `${this.uri}/stations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
