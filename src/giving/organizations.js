
export default function organizations(id) {
  this.uri = `${this.uri}/organizations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
