// import db from "../config/db.js";
import bcrypt from "bcrypt";

export async function getAllUsers(conn, callback) {
  console.log(conn);
  const result = await conn.query("SELECT * FROM users");
  callback(result);
}

export async function findEmailPassword(conn, email, password, callback) {
  console.log(conn);
  let result;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      result = await conn.query(
        `SELECT * FROM users WHERE email = ? AND password = ?`,
        [email, hash]
      );
      callback(result);
    });
  });
}

export async function findUserByEmail(conn, email, callback) {
  console.log(conn);
  const result = await conn.query(`SELECT * FROM users WHERE email = ?`, [
    email,
  ]);
  callback(result);
}

export async function findUserById(conn, id, callback) {
  console.log(conn);
  const result = await conn.query(`SELECT * FROM users WHERE id = ?`, [id]);
  callback(result);
}

export async function findUserByProfileName(conn, profileName, callback) {
  console.log(conn);
  const result = await conn.query(
    `SELECT * FROM users WHERE profileName LIKE ?`,
    ["%" + profileName + "%"]
  );
  callback(result);
}

export async function createUser(conn, user, callback) {
  console.log(conn);
  let result;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, async function (err, hash) {
      console.log("hash", hash);
      result = await conn.query(
        "INSERT INTO users (email, password, profileName, profileImage) VALUES (?,?,?,?)",
        [user.email, hash, user.profileName, user.profileImage]
      );
      callback(result);
    });
  });
}

export async function updateUser(conn, userId, updatedUser, callback) {
  console.log(conn);
  console.log("updated user:", updatedUser);
  console.log("user id:", userId);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(updatedUser.password, salt, async function (err, hash) {
      const result = await conn.query(
        `UPDATE users
    SET email = ?, password = ?, profileName = ?, profileImage = ?
    WHERE id = ?`,
        [
          updatedUser.email,
          hash,
          updatedUser.profileName,
          updatedUser.profileImage,
          userId,
        ]
      );
      callback(result);
    });
  });
}

export async function subscribeUserToNewsletter(conn, userId, callback) {
  console.log(conn);
  const result = await conn.query(
      `UPDATE users
      SET newsletter = true
      WHERE id = ?`,
      [userId]
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
