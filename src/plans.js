import Promise from 'bluebird';
import forEach from 'lodash/forEach';
import flatten from 'lodash/flatten';
import http from './http';
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

function getFuturePlansForSchedule(schedule) {
  return new Promise((resolve, reject) => {
    http.get(`/service_types/${schedule.relationships.service_type.data.id}/plans?filter=future`)
          .then((res) => Promise.all(res.data.map((plan) => getPlanItems(schedule, plan)
                                .then(getPlanAttachments(schedule, plan)))))
          .then((plans) => {
            resolve({
              schedule,
              plans,
            });
          })
          .catch((err) => {
            reject(err);
          });
  });
}

class Plans {
  getPlan = (planId, userId) => {
    return new Promise((resolve, reject) => {
      http.get(`/plans/${planId}?include=series`)
          .then((plan) => {
            resolve({
              plan: plan.data,
              userId,
            });
          });
    });
  };

  getPlanItems = (args) => {
    return new Promise((resolve, reject) => {
      http.get(`${args.plan.links.items}?include=media`)
          .then((planItems) => {
            resolve({
              ...args,
              planItems: planItems.data,
            });
          });
    });
  };

  getPlanAttachments = (args) => {
    return new Promise((resolve) => {
      http.get(args.plan.links.all_attachments)
        .then((attachmentsRes) => {
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
          resolve({
            ...args,
            planAttachments: attachmentsRes.data,
          });
        });
    });
  };

  getFuturePlans = () => {
    const promise = new Promise((resolve) => {
      Schedules.getSchedules()
        .then(res => Promise.all(res.data.map(schedule => getFuturePlansForSchedule(schedule))))
        .then((schedules) => {
          resolve(schedules);
        });
    });
    return promise;
  };

  getSkipFilter = (args) => {
    return new Promise((resolve, reject) => {
      http.post(`/people/${args.userId}/skip_filter`, {
        data: {
          type: 'skip',
          attributes: {},
          relationships: {
            attachment: {
              data: args.planAttachments.map(attachment => ({ type: 'Attachment', id: attachment.id })),
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
        .then((skippedAttachmentsRes) => {
          resolve({
            ...args,
            skippedAttachments: skippedAttachmentsRes.data,
          });
        });
    });
  };
}

export default new Plans();
