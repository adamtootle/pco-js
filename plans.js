const Promise = require('bluebird');
const http = require('./http');
const Schedules = require('./schedules');

function Plans() {

  //
  // private methods
  //

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

  //
  // public methods
  //

  this.getPlan = (args) => {
    return new Promise((resolve, reject) => {
      http.get(`/service_types/${args.serviceTypeId}/plans/${args.planId}`)
          .then((plan) => {
            resolve({
              plan,
            });
          });
    });
  };
  
  this.getPlanItems = (args) => {
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

  this.getPlanAttachments = (args) => {
    return new Promise((resolve, reject) => {
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

  this.getFuturePlans = () => {
    const promise = new Promise((resolve) => {
      Schedules.getSchedules()
        .then((res) => Promise.all(res.data.map((schedule) => getFuturePlansForSchedule(schedule))))
        .then((schedules) => {
          resolve(schedules);
        });
    });
    return promise;
  };
}

module.exports = new Plans();
