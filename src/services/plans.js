import Promise from 'bluebird';
import forEach from 'lodash/forEach';
import flatten from 'lodash/flatten';
import http from '../http';
import Schedules from './schedules';

function getPlanItems(schedule, plan) {
  const newPlan = plan;
  return new Promise((resolve, reject) => {
    http.get(`/service_types/${schedule.relationships.service_type.data.id}/plans/${plan.id}/items?include=media,song`)
      .then((res) => {
        newPlan.items = res.data;
        resolve(newPlan);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getPlanAttachments(schedule, plan) {
  const newPlan = plan;
  return new Promise((resolve, reject) => {
    http.get(`/service_types/${schedule.relationships.service_type.data.id}/plans/${plan.id}/all_attachments`)
      .then((res) => {
        newPlan.attachments = res.data;
        resolve(newPlan);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

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
    console.log('plan', plan);
    return new Promise((resolve) => {
      http.get(`${plan.links.items}?include=media`)
          .then((planItems) => {
            resolve(planItems.data);
          });
    });
  };

  getAttachments = (plan) => {
    return new Promise((resolve) => {
      http.get(plan.links.all_attachments)
        .then((attachments) => {
          // const planAttachments = flatten(attachmentsRes.data.map((singleAttachmentsResponse) => {
          //   return singleAttachmentsResponse.data.map((attachment) => {
          //     return {
          //       ...attachment,
          //       relationships: {
          //         ...attachment.relationships,
          //         song: {
          //           ...attachment.relationships.song,
          //           data: {
          //             id: singleAttachmentsResponse.meta.parent.id,
          //           },
          //         },
          //       },
          //     };
          //   });
          // }));
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
