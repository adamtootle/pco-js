
export default function conditionResults(id) {
  this.uri = `${this.uri}/condition_results`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
