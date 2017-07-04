
export default function planTemplates(id) {
  this.uri = `${this.uri}/plan_templates`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
