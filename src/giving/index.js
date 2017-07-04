
import PCORequest from '../PCORequest';

import me from '../me';
import batches from './batches';
import batchGroups from './batchGroups';
import designations from './designations';
import donations from './donations';
import funds from './funds';
import labels from './labels';
import organizations from './organizations';
import paymentMethods from './paymentMethods';
import people from './people';
import recurringDonations from './recurringDonations';
import recurringDonationDesignations from './recurringDonationDesignations';

export default class Services extends PCORequest {
  constructor() {
    super();
    this.uri = '/giving/v2';
  }

  me = me;
  batches = batches;
  batchGroups = batchGroups;
  designations = designations;
  donations = donations;
  funds = funds;
  labels = labels;
  organizations = organizations;
  paymentMethods = paymentMethods;
  people = people;
  recurringDonations = recurringDonations;
  recurringDonationDesignations = recurringDonationDesignations;
}
