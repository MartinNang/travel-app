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
    `SELECT * FROM itineraries WHERE userId = (?)`,
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

export function findItinerariesByUserEmail(userEmail, callback) {
  db.query(
    `SELECT * FROM users WHERE email = (?)`,
    [userEmail],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      if (result && result.length > 0) {
        console.log("found user with id", result[0].userId);
        findItinerariesByUserId(result[0].userId, callback);
      } else {
        callback(result);
        //throw 404;
      }
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

export function createItinerary(userEmail, itinerary, callback) {
  db.query(
    `SELECT * FROM users WHERE email = (?)`,
    [userEmail],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      if (result && result.length > 0) {
        console.log("found user with id", result[0].userId);
        db.query(
          "INSERT INTO itineraries (`userId`, `itineraryName`, `startDate`, `endDate`) VALUES (?, ?, ?, ?);",
          [
            result[0].userId,
            itinerary.name,
            itinerary.startDate,
            itinerary.endDate,
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
    }
  );
}

export function updateItinerary(
  userEmail,
  oldItineraryName,
  itinerary,
  callback
) {
  console.log("oldItineraryName", oldItineraryName);
  console.log("updating itinerary:", itinerary);
  db.query(
    `SELECT * FROM users WHERE email = (?)`,
    [userEmail],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      if (result && result.length > 0) {
        console.log("found user with id", result[0].userId);
        // TODO: get itineraryId using itineraryName + email OR use iName + email as primary key in table
        db.query(
          `UPDATE itineraries
          SET itineraryName = ?, startDate = ?, endDate = ?
          WHERE userId = ? AND itineraryName = ?`,
          [
            itinerary.name,
            itinerary.startDate,
            itinerary.endDate,
            result[0].userId,
            oldItineraryName,
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
      } else {
        callback(result);
        //throw 404;
      }
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
