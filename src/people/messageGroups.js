
export default function messageGroups(id) {
  this.uri = `${this.uri}/message_groups`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
