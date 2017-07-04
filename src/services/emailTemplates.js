
export default function emailTemplates(id) {
  this.uri = `${this.uri}/email_templates`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
