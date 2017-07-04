
export default function recurringDonationDesignations(id) {
  this.uri = `${this.uri}/recurring_donation_designations`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
