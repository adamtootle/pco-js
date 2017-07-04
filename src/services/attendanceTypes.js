
export default function attendanceTypes(id) {
  this.uri = `${this.uri}/attendance_types`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
