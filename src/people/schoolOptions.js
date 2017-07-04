
export default function schoolOptions(id) {
  this.uri = `${this.uri}/school_options`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
