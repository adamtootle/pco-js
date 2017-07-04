
export default function funds(id) {
  this.uri = `${this.uri}/funds`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
