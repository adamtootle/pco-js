
export default function workflows(id) {
  this.uri = `${this.uri}/workflows`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
