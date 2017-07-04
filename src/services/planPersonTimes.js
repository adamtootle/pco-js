
export default function planPersonTimes(id) {
  this.uri = `${this.uri}/plan_person_times`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
