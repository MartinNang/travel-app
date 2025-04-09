export async function getAllCollaborators(conn, callback) {
  console.log("get all collaborators");
  const result = await conn.query("SELECT * FROM collaborators");
  callback(result);
}

export async function findCollaboratorsByItineraryId(
  conn,
  itineraryId,
  callback
) {
  console.log("find collaborators by itinerary_id", itineraryId);
  const result = await conn.query(
    `SELECT * FROM collaborators WHERE itinerary_id = (?)`,
    [itineraryId]
  );
  callback(result);
}

export async function findItinerariesByCollaboratorUserId(
  conn,
  userId,
  callback
) {
  console.log("find collaborators by user_id", userId);
  const result = await conn.query(
    `SELECT * FROM collaborators WHERE user_id = (?)`,
    [userId]
  );
  callback(result);
}
