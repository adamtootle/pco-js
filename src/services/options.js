
export default function options(id) {
  this.uri = `${this.uri}/options`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
