
export default function personMergers(id) {
  this.uri = `${this.uri}/person_mergers`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
