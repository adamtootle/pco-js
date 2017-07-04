
export default function recurringDonations(id) {
  this.uri = `${this.uri}/recurring_donations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
