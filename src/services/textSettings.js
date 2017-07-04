
export default function textSettings(id) {
  this.uri = `${this.uri}/text_settings`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
