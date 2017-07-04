
export default function timePreferenceOptions(id) {
  this.uri = `${this.uri}/time_preference_options`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
