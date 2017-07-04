
export default function itemNotes(id) {
  this.uri = `${this.uri}/item_notes`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
