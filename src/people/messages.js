
export default function messages(id) {
  this.uri = `${this.uri}/messages`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
