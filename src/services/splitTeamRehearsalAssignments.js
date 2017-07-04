
export default function splitTeamRehearsalAssignments(id) {
  this.uri = `${this.uri}/split_team_rehearsal_assignments`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
