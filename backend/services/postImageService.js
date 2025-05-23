export async function getAllPostImages(conn, callback) {
  console.log("get all postImages");
  const result = await conn.query("SELECT * FROM postImages");
  callback(result);
}

export async function findPostImagesByPostId(conn, postId, callback) {
  console.log("find postImages by post_id", postId);
  const result = await conn.query(
    `SELECT * FROM postImages WHERE post_id = (?)`,
    [postId]
  );
  callback(result);
}

export async function findPostImagesByUserId(conn, userId, callback) {
  console.log("find postImages by user_id", userId);
  const result = await conn.query(
      `SELECT * FROM postImages WHERE user_id = (?)`,
      [userId]
  );
  callback(result);
}

export async function createPostImage(conn, postId, postImagePath, userId, callback) {
  console.log("creating post image", postImagePath);
  const result = await conn.query(
    "INSERT INTO postImages (`post_id`, `imagePath`, `user_id`) VALUES (?, ?, ?);",
    [postId, postImagePath, userId]
  );
  callback(result);
}

/*
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
