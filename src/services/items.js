
export default function items(id) {
  this.uri = `${this.uri}/items`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
