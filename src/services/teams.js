
export default function teams(id) {
  this.uri = `${this.uri}/teams`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
