const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "testUser",
  password: "test",
  database: "db_1",
});

setup();

function setup() {
  resetUsers();
  resetEvents();
  resetItineraries();
  resetItineraryEvents();
}

function resetItineraries() {
  db.query("DROP TABLE IF EXISTS `itineraries`", () => {
    console.log("deleted itineraries table");
  });

  db.query(
    `
    CREATE TABLE itineraries (
      itineraryId int AUTO_INCREMENT,
      userId int,
      itineraryName varchar(255),
      startDate varchar(255),
      endDate varchar(255),
      PRIMARY KEY (itineraryId),
      FOREIGN KEY (userId) REFERENCES users(userId)
  )`,
    () => {
      console.log("created itineraries table");
    }
  );

  db.query(
    "INSERT INTO itineraries (`itineraryId`, `userId`, `itineraryName`, `startDate`, `endDate`) VALUES (1, 1, 'My trip in Dublin', '19.02.2025', '21.02.2025');",
    () => {
      console.log("added test itineraryEvents");
    }
  );
}

function resetItineraryEvents() {
  db.query("DROP TABLE IF EXISTS `itineraryEvents`", () => {
    console.log("deleted itineraryEvents table");
  });

  db.query(
    `
    CREATE TABLE itineraryEvents (
      itineraryId int,
      eventId int,
      PRIMARY KEY (itineraryId, eventId),
      FOREIGN KEY (itineraryId) REFERENCES itineraries(itineraryId),
      FOREIGN KEY (eventId) REFERENCES events(eventId)
  )`,
    () => {
      console.log("created itineraryEvents table");
    }
  );

  db.query(
    "INSERT INTO itineraryEvents (`itineraryId`, `eventId`) VALUES (1, 1);",
    () => {
      console.log("added test itineraryEvents");
    }
  );
}

function resetEvents() {
  db.query("DROP TABLE IF EXISTS `events`", () => {
    console.log("deleted events table");
  });

  db.query(
    `
    CREATE TABLE events (
      eventId int PRIMARY KEY AUTO_INCREMENT,
      name varchar(255),
      itineraryId int,
      latitude varchar(255),
      longitude varchar(255),
      address varchar(255),
      openingHours varchar(255),
      phoneNr varchar(255),
      email varchar(255),
      link varchar(255),
      type varchar(255),
      operator varchar(255),
      wheelchair varchar(255),
      description varchar(255),
      fee varchar(255),
      startTime varchar(255),
      endTime varchar(255)
  )`,
    () => {
      console.log("created events table");
    }
  );

  db.query(
    `INSERT INTO events (eventId,name,itineraryId,latitude,longitude,address,openingHours,
    phoneNr,email,link,type,operator,link,type,operator,wheelchair,description,fee, startTime, endTime) 
    VALUES (1, 'Event #1', 1, '53.2734', '-7.77832031', '123 Evergreen Terrace', '10:00 - 18:00', '+43 123 4567890', 
    'gmail@email.com', 'email.gmail.email', 'cafee', 'The Cafe', 'yes', 'this is the description', '20€', '10:00', '11:00');`,
    () => {
      console.log("added test events");
    }
  );
}

function resetUsers() {
  db.query("DROP TABLE `users`", () => {
    console.log("deleted users table");
  });

  db.query(
    `
    CREATE TABLE users (
      userId int PRIMARY KEY AUTO_INCREMENT,
      email varchar(255) UNIQUE,
      password varchar(255),
      profileName varchar(255) UNIQUE,
      profileImage varchar(255)
      )`,
    () => {
      console.log("created users table");
    }
  );

  db.query(
    "INSERT INTO users (`userId`, `email`, `password`, `profileName`, `profileImage`) VALUES ('1', 'email1@gmail.email', 'password1', 'Test1', ''), ('2', 'gmail2@email.gmail.email', 'password2', 'Test2', '');",
    () => {
      console.log("added test users");
    }
  );
}

module.exports = db;
