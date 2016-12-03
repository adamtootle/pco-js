const Promise = require('bluebird');
const http = require('./http');

function Schedules() {
  this.getSchedules = () => http.get('/me/schedules');
}

module.exports = new Schedules();
