
export default function signupSheets(id) {
  this.uri = `${this.uri}/signup_sheets`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
