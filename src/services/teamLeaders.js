
export default function teamLeaders(id) {
  this.uri = `${this.uri}/team_leaders`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
