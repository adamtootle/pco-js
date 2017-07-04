
export default function eventPeriods(id) {
  this.uri = `${this.uri}/event_periods`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
