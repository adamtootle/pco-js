
export default function plans(id) {
  this.uri = `${this.uri}/plans`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
