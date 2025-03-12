//import db from "../config/db.js";

export async function getAllUsers(conn, callback) {
  console.log(conn);
  const result = await conn.query("SELECT * FROM users");
  callback(result);
  // (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(result);
  //   callback(result);
  // }
}

export function findEmailPassword(conn, user, callback) {
  conn.query(
    `SELECT * FROM users WHERE email = (?) AND password = (?)`,
    [user.email, user.password],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      callback(result);
    }
  );
}

export function findUserByEmail(conn, user, callback) {
  conn.query(
    `SELECT * FROM users WHERE email = (?)`,
    [user.email],
    (err, result) => {
      if (err) {
        console.log(err);
        throw 500;
      }
      callback(result);
    }
  );
}

export function createUser(conn, user, callback) {
  conn.query(
    "INSERT INTO users (profile_name, email, password) VALUES (?,?,?)",
    [user.username, user.email, user.password],
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

export function updateProfileName(conn, userId, profileName, callback) {
  conn.query(
    `UPDATE users
    SET profile_name = ?
    WHERE id = ?`,
    [profileName, userId],
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

export function updateProfileImage(conn, userId, profileImage, callback) {
  conn.query(
    `UPDATE users
    SET profileImage = ?
    WHERE id = ?`,
    [profileImage, userId],
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

export function deleteUser(conn, userId, callback) {
  console.log("deleting user", userId);
  conn.query(
    `DELETE FROM users
    WHERE id = ?`,
    [userId],
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
