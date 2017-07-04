
export default function teamPositions(id) {
  this.uri = `${this.uri}/team_positions`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
