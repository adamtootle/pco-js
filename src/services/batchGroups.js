
export default function batchGroups(id) {
  this.uri = `${this.uri}/batch_groups`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
