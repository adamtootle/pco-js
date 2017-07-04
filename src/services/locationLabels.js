
export default function locationLabels(id) {
  this.uri = `${this.uri}/location_labels`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
