
export default function neededPositions(id) {
  this.uri = `${this.uri}/needed_positions`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
