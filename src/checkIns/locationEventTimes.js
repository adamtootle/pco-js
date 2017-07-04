
export default function locationEventTimes(id) {
  this.uri = `${this.uri}/location_event_times`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
