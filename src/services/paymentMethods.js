
export default function paymentMethods(id) {
  this.uri = `${this.uri}/payment_methods`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;
  return this;
}
