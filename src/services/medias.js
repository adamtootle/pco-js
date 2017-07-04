
export default function medias(id) {
  this.uri = `${this.uri}/medias`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
