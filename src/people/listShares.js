
export default function listShares(id) {
  this.uri = `${this.uri}/list_shares`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
