export default class Event {
  constructor(itineraryId, overpassId, startTime, endTime) {
    this.itineraryId = itineraryId;
    this.overpassId = overpassId;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
