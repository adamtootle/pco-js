
export default function checkInGroups(id) {
  this.uri = `${this.uri}/check_in_groups`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
