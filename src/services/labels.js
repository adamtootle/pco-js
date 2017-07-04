
export default function labels(id) {
  this.uri = `${this.uri}/labels`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
