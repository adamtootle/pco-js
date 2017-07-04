// import http from '../http';

// class Attachments {
//   getAttachmentStreamUrl(attachment) {
//     return http.get(attachment.links.self)
//             .then(res => http.post(res.data.links.open));
//   }
// }

// export default new Attachments();

export default function (id) {
  this.uri = `${this.uri}/attachments`;
  this.uri = id ? `${this.uri}/${id}` : this.uri;

  return this;
}
