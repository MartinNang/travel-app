export async function getAllLocations(conn, callback) {
  console.log("get all events");
  const result = await conn.query("SELECT * FROM locations");
  callback(result);
}

export async function findLocationByOverpassId(conn, overpassId, callback) {
  console.log("find locations by overpass_id", overpassId);
  const result = await conn.query(
    `SELECT * FROM locations WHERE overpass_id = (?)`,
    [itineraryId]
  );
  callback(result);
}

/*
export async function createLocation(conn, overpassId, location, callback) {
  console.log("creating location", overpassId);
  const result = await conn.query(
    "INSERT INTO locations (`overpass_id`, `itinerary_id`, `start_date`, `end_date`) VALUES (?, ?, ?, ?);",
    [overpassId, event.itineraryId, event.startDate, event.endDate]
  );
  callback(result);
}

export async function updateEvent(conn, overpassId, event, callback) {
  console.log("updating event", overpassId);
  const result = await conn.query(
    `UPDATE events
              SET overpass_id = ?, itinerary_id = ?, start_time = ?, end_time = ?
              WHERE overpass_id = ?`,
    [
      event.overpassId,
      event.itineraryId,
      event.startTime,
      event.endTime,
      event.overpassId,
    ]
  );
  callback(result);
}

export async function deleteEvent(conn, overpassId, callback) {
  console.log("deleting event", overpassId);
  const result = await conn.query(
    `DELETE FROM events
        WHERE overpass_id = ?`,
    [overpassId]
  );
  callback(result);
}
*/
