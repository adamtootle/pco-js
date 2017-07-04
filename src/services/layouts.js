
export default function layouts(id) {
  this.uri = `${this.uri}/layouts`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
