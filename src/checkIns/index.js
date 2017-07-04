
import PCORequest from '../PCORequest';

import me from '../me';
import attendanceTypes from './attendanceTypes';
import checkIns from './checkIns';
import checkInGroups from './checkInGroups';
import events from './events';
import eventLabels from './eventLabels';
import eventPeriods from './eventPeriods';
import eventTimes from './eventTimes';
import headcounts from './headcounts';
import labels from './labels';
import locations from './locations';
import locationEventPeriods from './locationEventPeriods';
import locationEventTimes from './locationEventTimes';
import locationLabels from './locationLabels';
import options from './options';
import organizations from './organizations';
import passes from './passes';
import people from './people';
import personEvents from './personEvents';
import stations from './stations';
import themes from './themes';

export default class Services extends PCORequest {
  constructor() {
    super();
    this.uri = '/check_ins/v2';
  }

  me = me;
  attendanceTypes = attendanceTypes;
  checkIns = checkIns;
  checkInGroups = checkInGroups;
  events = events;
  eventLabels = eventLabels;
  eventPeriods = eventPeriods;
  eventTimes = eventTimes;
  headcounts = headcounts;
  labels = labels;
  locations = locations;
  locationEventPeriods = locationEventPeriods;
  locationEventTimes = locationEventTimes;
  locationLabels = locationLabels;
  options = options;
  organizations = organizations;
  passes = passes;
  people = people;
  personEvents = personEvents;
  stations = stations;
  themes = themes;
}
