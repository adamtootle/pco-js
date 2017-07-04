
export default function songSchedules(id) {
  this.uri = `${this.uri}/song_schedules`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
