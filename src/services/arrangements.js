export default function (id) {
  this.uri = `${this.uri}/arrangements`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;

  return this;
}
