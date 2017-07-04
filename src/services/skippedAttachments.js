
export default function skippedAttachments(id) {
  this.uri = `${this.uri}/skipped_attachments`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
