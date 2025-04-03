export async function getAllItineraryTypes(conn, callback) {
  console.log("get all itineraryTypes");
  console.log("connection:", conn);
  const result = await conn.query("SELECT * FROM itineraryTypes");
  callback(result);
}

export async function findItineraryTypeById(conn, id, callback) {
  console.log("find itineraryTypes by id", id);
  const result = await conn.query(
    `SELECT * FROM itineraryTypes WHERE id = (?)`,
    [id]
  );
  callback(result);
}
