
export default function reports(id) {
  this.uri = `${this.uri}/reports`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
