
export default function eventTimes(id) {
  this.uri = `${this.uri}/event_times`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
