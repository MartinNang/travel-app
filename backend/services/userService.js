// import db from "../config/db.js";

export async function getAllUsers(conn, callback) {
  console.log(conn);
  const result = await conn.query("SELECT * FROM users");
  callback(result);
}

export async function findEmailPassword(conn, email, password, callback) {
  console.log(conn);
  const result = await conn.query(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password]
  );
  callback(result);
}

export async function findUserByEmail(conn, user, callback) {
  console.log(conn);
  const result = await conn.query(`SELECT * FROM users WHERE email = (?)`, [
    user.email,
  ]);
  callback(result);
}

export async function createUser(conn, user, callback) {
  console.log(conn);
  const result = await conn.query(
    "INSERT INTO users (email, password, profileName, profileImage) VALUES (?,?,?,?)",
    [user.email, user.password, user.profileName, user.profileImage]
  );
  callback(result);
}

export async function updateProfileName(conn, userId, profileName, callback) {
  console.log(conn);
  const result = await conn.query(
    `UPDATE users
    SET profileName = ?
    WHERE id = ?`,
    [profileName, userId]
  );
  callback(result);
}

export async function updateProfileImage(conn, userId, profileImage, callback) {
  console.log(conn);
  const result = await conn.query(
    `UPDATE users
    SET profileImage = ?
    WHERE id = ?`,
    [profileImage, userId]
  );
  callback(result);
}

export async function deleteUser(conn, userId, callback) {
  console.log(conn);
  const result = await conn.query(
    `DELETE FROM users
    WHERE id = ?`,
    [userId]
  );
  callback(result);
}
