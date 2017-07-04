
export default function apps(id) {
  this.uri = `${this.uri}/apps`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
