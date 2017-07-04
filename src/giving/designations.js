
export default function designations(id) {
  this.uri = `${this.uri}/designations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
