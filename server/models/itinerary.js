export default class Itinerary {
  constructor(name, startDate, endDate, tags) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tags = tags;
  }
}

/*
itineraryId int AUTO_INCREMENT,
      userId int,
      itineraryName varchar(255),
      startDate varchar(255),
      endDate varchar(255),
      PRIMARY KEY (itineraryId),
      FOREIGN KEY (userId) REFERENCES users(userId)
  */
