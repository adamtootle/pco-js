
export default function personTeamPositionAssignments(id) {
  this.uri = `${this.uri}/person_team_position_assignments`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
