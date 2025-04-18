export async function getAllEvents(conn, callback) {
  console.log("get all events");
  const result = await conn.query("SELECT * FROM events");
  callback(result);
}

export async function findEventsByItineraryId(conn, itineraryId, callback) {
  console.log("find events by itinerary_id", itineraryId);
  const result = await conn.query(
    `SELECT * FROM events WHERE itinerary_id = (?)`,
    [itineraryId]
  );
  callback(result);
}

export async function findEventsById(conn, id, callback) {
  console.log("find events by id", id);
  const result = await conn.query(`SELECT * FROM events WHERE id = (?)`, [id]);
  callback(result);
}

export async function createEvent(conn, event, callback) {
  const result = await conn.query(
    "INSERT INTO events (`name`, `itinerary_id`, `start_time`, `end_time`) VALUES (?, ?, ?, ?);",
    [event.name, event.itineraryId, event.startDate, event.endDate]
  );
  callback(result);
}

export async function createEvents(conn, events, callback) {
  const result = await conn.batch(
    "INSERT INTO events (`name`, `itinerary_id`, `start_time`, `end_time`) VALUES (?, ?, ?, ?);",
    events,
    (err, res, meta) => {
      if (err) {
        console.error("Error loading data, reverting changes: ", err);
      } else {
        console.log(res);
        console.log(meta);
      }
    }
  );
  callback(result);
}

export async function updateEvent(conn, id, event, callback) {
  console.log("updating event", id);
  const result = await conn.query(
    `UPDATE events
            SET overpass_id = ?, itinerary_id = ?, start_time = ?, end_time = ?
            WHERE overpass_id = ?`,
    [event.id, event.itineraryId, event.startTime, event.endTime, event.id]
  );
  callback(result);
}

export async function deleteEvent(conn, id, callback) {
  console.log("deleting event", id);
  const result = await conn.query(
    `DELETE FROM events
      WHERE overpass_id = ?`,
    [id]
  );
  callback(result);
}

export async function deleteEvents(conn, itineraryId, callback) {
  console.log("deleting events with itineraryId", itineraryId);
  const result = await conn.batch(
    `DELETE FROM events
      WHERE itinerary_id = ?`,
    [itineraryId]
  );
  callback(result);
}
