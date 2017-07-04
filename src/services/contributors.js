
export default function contributors(id) {
  this.uri = `${this.uri}/contributors`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
