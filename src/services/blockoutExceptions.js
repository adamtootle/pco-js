
export default function blockoutExceptions(id) {
  this.uri = `${this.uri}/blockout_exceptions`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
