
export default function personApps(id) {
  this.uri = `${this.uri}/person_apps`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
