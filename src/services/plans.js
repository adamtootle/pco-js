import Promise from 'bluebird';
import http from '../http';

class Plans {
  get = (planId) => (
    new Promise((resolve) => {
      http.get(`/plans/${planId}?include=series`)
          .then((plan) => {
            resolve(plan.data);
          });
    })
  );

  getItems = (plan) => {
    return new Promise((resolve) => {
      http.get(`${plan.links.items}?include=media`)
          .then((planItems) => {
            resolve(planItems.data);
          });
    });
  };

  getAttachments = (plan) => {
    return new Promise((resolve) => {
      http.get(`${plan.links.all_attachments}?per_page=100`)
        .then((attachments) => {
          resolve(attachments.data);
        });
    });
  };

  getSkipFilter = (args) => {
    return new Promise((resolve) => {
      http.post(`/people/${args.user.id}/skip_filter`, {
        data: {
          type: 'skip',
          attributes: {},
          relationships: {
            attachment: {
              data: args.attachments.map(attachment => ({ type: 'Attachment', id: attachment.id })),
            },
            plan: {
              data: [{
                type: 'Plan',
                id: args.plan.id,
              }],
            },
          },
        },
      })
        .then((skippedAttachments) => {
          resolve(skippedAttachments.data);
        });
    });
  };
}

export default new Plans();
