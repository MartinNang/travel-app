export async function getAllItineraries(conn, callback) {
  console.log(conn);
  const result = await conn.query("SELECT * FROM itineraries");
  callback(result);
}

export async function findItinerariesByUserId(conn, userId, callback) {
  console.log(conn);
  const result = await conn.query(
    `SELECT * FROM itineraries WHERE user_id = (?)`,
    [userId]
  );
  callback(result);
}

export async function findItinerariesByUserEmail(conn, userEmail, callback) {
  console.log(conn);
  const result = await conn.query(
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
  callback(result);
}

export async function findItinerariesByName(conn, itineraryName, callback) {
  console.log(conn);
  const result = await conn.query(
    `SELECT * FROM itineraries WHERE name = (?)`,
    [itineraryName]
  );
  callback(result);
}

export async function findItinerariesById(conn, itineraryId, callback) {
  console.log(conn);
  const result = await conn.query(`SELECT * FROM itineraries WHERE id = (?)`, [
    itineraryId,
  ]);
  callback(result);
}

export async function createItinerary(conn, itinerary, callback) {
  console.log(conn);
  const result = await conn.query(
    "INSERT INTO itineraries (`name`, `user_id`, `start_date`, `end_date`, `created_at`, `updated_at`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?);",
    [
      itinerary.name,
      itinerary.userId,
      itinerary.startDate,
      itinerary.endDate,
      itinerary.createdAt,
      itinerary.updatedAt,
      itinerary.type,
    ]
  );
  callback(result);
}

export async function updateItinerary(conn, itineraryId, itinerary, callback) {
  console.log(conn);
  console.log("updating itinerary with type", itinerary.type);
  const result = await conn.query(
    `UPDATE itineraries
          SET name = ?, start_date = ?, end_date = ?, type = ?
          WHERE id = ?`,
    [
      itinerary.name,
      itinerary.startDate,
      itinerary.endDate,
      itinerary.type,
      itineraryId,
    ]
  );
  console.log("result from updating", result);
  callback(result);
}

export async function deleteItinerary(conn, itineraryId, callback) {
  // TODO: get itineraryId using itineraryName + email OR use iName + email as primary key in table
  console.log("deleting itinerary", itineraryId);
  const result = await conn.query(
    `DELETE FROM itineraries
    WHERE id = ?`,
    [itineraryId]
  );
  callback(result);
}
