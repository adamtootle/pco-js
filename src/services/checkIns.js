
export default function checkIns(id) {
  this.uri = `${this.uri}/check_ins`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
