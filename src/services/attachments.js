import http from '../http';

class Attachments {
  getAttachmentStreamUrl(attachment) {
    return http.get(attachment.links.self)
            .then(res => http.post(res.data.links.open));
  }
}

export default new Attachments();
