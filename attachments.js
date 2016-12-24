const Promise = require('bluebird');
const http = require('./http');
const Schedules = require('./schedules');

function Attachments() {

  //
  // public methods
  //

  this.getAttachmentStreamUrl = (attachment) => {
    return http.get(attachment.links.self)
            .then((res) => http.post(res.data.links.open));
  };
}

module.exports = new Attachments();
