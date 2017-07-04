
export default function planNotes(id) {
  this.uri = `${this.uri}/plan_notes`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
