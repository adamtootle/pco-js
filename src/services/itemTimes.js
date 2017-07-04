
export default function itemTimes(id) {
  this.uri = `${this.uri}/item_times`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
