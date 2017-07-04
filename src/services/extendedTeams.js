
export default function extendedTeams(id) {
  this.uri = `${this.uri}/extended_teams`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
