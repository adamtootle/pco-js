
export default function donations(id) {
  this.uri = `${this.uri}/donations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
