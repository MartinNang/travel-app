import db from "../config/db.js";

export function getAllItineraries(callback) {
  console.log(db);
  db.query("SELECT * FROM itineraries", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    callback(result);
  });
}

export function findItinerariesByUserId(userId, callback) {
  db.query(
    `SELECT * FROM itineraries WHERE username = (?)`,
    [userId],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      callback(result);
    }
  );
}

export function findItinerariesByName(itineraryName, callback) {
  db.query(
    `SELECT * FROM itineraries WHERE itineraryName = (?)`,
    [itineraryName],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      callback(result);
    }
  );
}

export function createItinerary(itinerary, callback) {
  db.query(
    "INSERT INTO itineraries (`userId`, `itineraryName`, `startDate`, `endDate`) VALUES (?, ?, ?, ?);",
    [itinerary.userId, itinerary.name, itinerary.startDate, itinerary.endDate],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      console.log(result);
      callback();
    }
  );
}
/*
export function updateItinerary(userEmail, itinerary, callback) {
  // TODO: get itineraryId using itineraryName + email OR use iName + email as primary key in table
  db.query(
    `UPDATE itineraries
    SET (itineraryName, startDate, endDate) VALUES (?, ?, ?, ?)
    WHERE itineraryId = ?`,
    [
      itinerary.itineraryName,
      itinerary.startDate,
      itinerary.endDate,
      itineraryId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      console.log(result);
      callback();
    }
  );
}

export function deleteItinerary(itineraryId, callback) {
  // TODO: get itineraryId using itineraryName + email OR use iName + email as primary key in table
  console.log("deleting itinerary", itineraryId);
  db.query(
    `DELETE FROM itineraries
    WHERE itineraryId = ?`,
    [itineraryId],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      console.log(result);
      callback();
    }
  );
}
*/
