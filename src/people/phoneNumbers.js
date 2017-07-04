
export default function phoneNumbers(id) {
  this.uri = `${this.uri}/phone_numbers`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
