import http from '../http';

class Schedules {
  getSchedules = () => http.get('/me/schedules');
}

export default new Schedules();
