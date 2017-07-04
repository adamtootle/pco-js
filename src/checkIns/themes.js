
export default function themes(id) {
  this.uri = `${this.uri}/themes`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
