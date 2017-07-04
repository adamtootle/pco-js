
export default function fieldOptions(id) {
  this.uri = `${this.uri}/field_options`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
