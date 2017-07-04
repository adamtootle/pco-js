
export default function peopleImportConflicts(id) {
  this.uri = `${this.uri}/people_import_conflicts`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
