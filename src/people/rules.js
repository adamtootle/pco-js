
export default function rules(id) {
  this.uri = `${this.uri}/rules`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
