
export default function personEvents(id) {
  this.uri = `${this.uri}/person_events`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
