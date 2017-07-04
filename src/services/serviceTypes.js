
export default function serviceTypes(id) {
  this.uri = `${this.uri}/service_types`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
