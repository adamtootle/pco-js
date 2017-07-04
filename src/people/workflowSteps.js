
export default function workflowSteps(id) {
  this.uri = `${this.uri}/workflow_steps`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
