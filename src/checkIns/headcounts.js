
export default function headcounts(id) {
  this.uri = `${this.uri}/headcounts`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
