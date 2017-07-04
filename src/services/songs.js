
export default function songs(id) {
  this.uri = `${this.uri}/songs`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
