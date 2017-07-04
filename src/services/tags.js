
export default function tags(id) {
  this.uri = `${this.uri}/tags`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
