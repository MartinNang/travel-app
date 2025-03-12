export function getAllItineraries(conn, callback) {
  console.log(conn);
  conn.query("SELECT * FROM itineraries", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    callback(result);
  });
}

export function findItinerariesByUserId(conn, userId, callback) {
  conn.query(
    `SELECT * FROM itineraries WHERE user_id = (?)`,
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

export function findItinerariesByUserEmail(conn, userEmail, callback) {
  conn.query(
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

export function findItinerariesByName(conn, itineraryName, callback) {
  conn.query(
    `SELECT * FROM itineraries WHERE name = (?)`,
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

export function createItinerary(conn, userId, itinerary, callback) {
  conn.query(
    "INSERT INTO itineraries (`user_id`, `name`, `start_date`, `end_date`, `created_at`) VALUES (?, ?, ?, ?, ?);",
    [
      userId,
      itinerary.name,
      itinerary.startDate,
      itinerary.endDate,
      itinerary.createdAt,
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

export function updateItinerary(conn, itineraryId, itinerary, callback) {
  console.log("updating itinerary:", itinerary.name);

  conn.query(
    `UPDATE itineraries
          SET name = ?, start_date = ?, end_date = ?
          WHERE id = ?`,
    [itinerary.name, itinerary.startDate, itinerary.endDate, itineraryId],
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

export function deleteItinerary(conn, itineraryId, callback) {
  // TODO: get itineraryId using itineraryName + email OR use iName + email as primary key in table
  console.log("deleting itinerary", itineraryId);
  conn.query(
    `DELETE FROM itineraries
    WHERE id = ?`,
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
