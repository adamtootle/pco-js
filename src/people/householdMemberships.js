
export default function householdMemberships(id) {
  this.uri = `${this.uri}/household_memberships`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
