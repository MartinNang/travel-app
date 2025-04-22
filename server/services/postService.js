export async function getAllPosts(conn, callback) {
  console.log("get all posts");
  const result = await conn.query("SELECT * FROM posts");
  callback(result);
}

export async function findPostsByItineraryId(conn, itineraryId, callback) {
  console.log("find posts by itinerary_id", itineraryId);
  const result = await conn.query(
    `SELECT * FROM posts WHERE itinerary_id = (?)`,
    [itineraryId]
  );
  callback(result);
}

export async function findPostsByUserId(conn, userId, callback) {
  console.log("find posts by user_id", userId);
  const result = await conn.query(`SELECT * FROM posts WHERE user_id = (?)`, [
    userId,
  ]);
  callback(result);
}

export async function createPost(conn, post, callback) {
  console.log("creating post", post);
  const result = await conn.query(
    "INSERT INTO posts (`itinerary_id`, `user_id`, `description`) VALUES (?, ?, ?) RETURNING `id`;",
    [post.itineraryId, post.userId, post.description]
  );
  callback(result);
}

export async function updatePost(conn, post, callback) {
  console.log("updating post", post);
  const result = await conn.query(
    `UPDATE posts
              SET itinerary_id = ?, user_id = ?, description = ?, image = ?, created_at = ?
              WHERE itinerary_id = ? AND user_id = ?`,
    [
      post.itineraryId,
      post.userId,
      post.description,
      post.image,
      post.createdAt,
      post.itineraryId,
      post.userId,
    ]
  );
  callback(result);
}

export async function deletePost(conn, itineraryId, userId, callback) {
  console.log("deleting post", overpassId);
  const result = await conn.query(
    `DELETE FROM posts
        WHERE itinerary_id = ? AND user_id = ?`,
    [itineraryId, userId]
  );
  callback(result);
}
