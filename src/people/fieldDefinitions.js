
export default function fieldDefinitions(id) {
  this.uri = `${this.uri}/field_definitions`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
