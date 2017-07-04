import PCORequest from '../PCORequest';
import plans from './plans';
import organizations from './organizations';

import annotationDrawings from './annotationDrawings';
import attachments from './attachments';
import schedules from './schedules';
import me from './me';

export default class Services extends PCORequest {
  annotationDrawings = annotationDrawings;
  attachments = attachments;
  schedules = schedules;
  me = me;
}

// module.exports = {
//   schedules,
//   plans,
//   attachments,
//   organizations,
// };
