export default function (id) {
  this.uri = `${this.uri}/blockouts`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;

  return this;
}
