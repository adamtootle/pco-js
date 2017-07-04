
export default function locationEventPeriods(id) {
  this.uri = `${this.uri}/location_event_periods`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
