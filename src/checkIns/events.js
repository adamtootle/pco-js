
export default function events(id) {
  this.uri = `${this.uri}/events`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
