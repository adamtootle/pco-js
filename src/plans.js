import Promise from 'bluebird';
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
  getPlan = (planId) => {
    return new Promise((resolve, reject) => {
      http.get(`/plans/${planId}`)
          .then((plan) => {
            resolve({
              plan,
            });
          });
    });
  };

  getPlanItems = (args) => {
    return new Promise((resolve, reject) => {
      http.get(args.plan.data.links.items)
          .then((planItems) => {
            resolve({
              plan: args.plan,
              planItems,
            });
          });
    });
  };

  getPlanAttachments = (args) => {
    return new Promise((resolve) => {
      http.get(args.plan.data.links.all_attachments)
          .then((planAttachments) => {
            resolve({
              plan: args.plan,
              planItems: args.planItems,
              planAttachments,
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
}

export default new Plans();
