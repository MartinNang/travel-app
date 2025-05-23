export default class Location {
  constructor(
    name,
    latitude,
    longitude,
    address,
    openingHours,
    phoneNr,
    link,
    type,
    operator,
    wheelchair,
    description,
    fee
  ) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
    this.openingHours = openingHours;
    this.phoneNr = phoneNr;
    this.link = link;
    this.type = type;
    this.operator = operator;
    this.wheelchair = wheelchair;
    this.description = description;
    this.fee = fee;
  }
}
