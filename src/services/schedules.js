export default function (id) {
  this.uri = `${this.uri}/schedules`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;

  return this;
}
