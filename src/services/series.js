
export default function series(id) {
  this.uri = `${this.uri}/series`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
