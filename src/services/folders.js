
export default function folders(id) {
  this.uri = `${this.uri}/folders`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
