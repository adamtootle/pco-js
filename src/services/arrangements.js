
export default function arrangements(id) {
  this.uri = `${this.uri}/arrangements`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
