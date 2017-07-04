
export default function eventLabels(id) {
  this.uri = `${this.uri}/event_labels`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
