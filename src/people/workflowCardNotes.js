
export default function workflowCardNotes(id) {
  this.uri = `${this.uri}/workflow_card_notes`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
