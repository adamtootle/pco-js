
export default function inactiveReasons(id) {
  this.uri = `${this.uri}/inactive_reasons`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
