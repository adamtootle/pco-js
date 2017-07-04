
export default function peopleImports(id) {
  this.uri = `${this.uri}/people_imports`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
