
export default function annotationDrawings(id) {
  this.uri = `${this.uri}/annotation_drawings`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
