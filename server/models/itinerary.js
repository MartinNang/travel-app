export default class Itinerary {
  constructor(name, userId, startDate, endDate, createdAt, updatedAt, type) {
    this.name = name;
    this.userId = userId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.type = type;
  }
}
