
export default function households(id) {
  this.uri = `${this.uri}/households`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
