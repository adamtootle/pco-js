
export default function workflowCards(id) {
  this.uri = `${this.uri}/workflow_cards`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
