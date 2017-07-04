
export default function planTimes(id) {
  this.uri = `${this.uri}/plan_times`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
