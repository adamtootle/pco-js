
export default function tagGroups(id) {
  this.uri = `${this.uri}/tag_groups`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
