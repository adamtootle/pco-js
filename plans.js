const Promise = require('bluebird');
const http = require('./http');
const services = require('./services');
const forEach = require('lodash/foreach');

function Plans() {

  //
  // private methods
  //

  function getPlanItems(schedule, plan) {
    const newPlan = plan;
    return new Promise((resolve, reject) => {
      http.get(`https://api.planningcenteronline.com/services/v2/service_types/${schedule.relationships.service_type.data.id}/plans/${plan.id}/items?include=media,song`)
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
      http.get(`https://api.planningcenteronline.com/services/v2/service_types/${schedule.relationships.service_type.data.id}/plans/${plan.id}/all_attachments`)
        .then((res) => {
          newPlan.attachments = res.data;
          resolve(newPlan);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function getSchedules() {
    return http.get('https://api.planningcenteronline.com/services/v2/me/schedules');
    // const deferred = Q.defer();
    // http.get('https://api.planningcenteronline.com/services/v2/me/schedules')
    //   .then((res) => {
    //     deferred.resolve(res.data);
    //   })
    //   .catch((err) => {
    //     deferred.reject(err);
    //   });
    // return deferred.promise;
  }

  function getFuturePlansForSchedule(schedule) {
    return new Promise((resolve, reject) => {
      http.get(`https://api.planningcenteronline.com/services/v2/service_types/${schedule.relationships.service_type.data.id}/plans?filter=future`)
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

  this.getFuturePlans = () => {
    const promise = new Promise((resolve) => {
      getSchedules()
        .then((res) => Promise.all(res.data.map((schedule) => getFuturePlansForSchedule(schedule))))
        .then((schedules) => {
          resolve(schedules);
        });
    });
    return promise;
  };

  this.getPlanItem = (item) => http.get(item.links.self);
    // const deferred = Q.defer();
    // getSchedules()
    //   .then((res) => {
    //     const promises = res.map((schedule) => {
    //       return getFuturePlansForSchedule(schedule);
    //     });
    //     deferred.resolve(Q.all(promises));
    //   });

    // services.getServiceTypes()
    //   .then((serviceTypes) => {
    //     const promises = serviceTypes.map((serviceType) => {
    //       return this.getFuturePlansForServiceType(serviceType);
    //     });
    //     return Q.all(promises)
    //   })
    //   .then((results) => {
    //     const res = results.reduce((prev, current) => {
    //       if (prev === undefined) { return current; }
    //       return prev.concat(current);
    //     })
    //     deferred.resolve(res);
    //   })
    //   .catch((err) => {
    //     deferred.reject(err);
    //   });
    // return deferred.promise;

  // this.getFuturePlansForServiceType = (serviceType) => {
  //   const deferred = Q.defer();
  //   http.get('https://api.planningcenteronline.com/services/v2/service_types/' + serviceType.id + '/plans?filter=future')
  //     .then((res) => {
  //       deferred.resolve(res.data);
  //     })
  //     .catch((err) => {
  //       deferred.reject(err);
  //     });
  //   return deferred.promise;
  // };
}

module.exports = new Plans();
