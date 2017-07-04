
export default function availableSignups(id) {
  this.uri = `${this.uri}/available_signups`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
