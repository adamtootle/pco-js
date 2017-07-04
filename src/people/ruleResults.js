
export default function ruleResults(id) {
  this.uri = `${this.uri}/rule_results`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
