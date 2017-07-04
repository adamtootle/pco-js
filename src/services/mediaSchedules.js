
export default function mediaSchedules(id) {
  this.uri = `${this.uri}/media_schedules`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
