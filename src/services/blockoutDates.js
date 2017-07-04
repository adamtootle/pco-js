
export default function blockoutDates(id) {
  this.uri = `${this.uri}/blockout_dates`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
