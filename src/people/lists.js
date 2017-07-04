
export default function lists(id) {
  this.uri = `${this.uri}/lists`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
