
export default function socialProfiles(id) {
  this.uri = `${this.uri}/social_profiles`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
