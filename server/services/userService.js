import db from "../config/db.js";

export function getAllUsers(callback) {
  console.log(db);
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    callback(result);
  });
}

export function findEmailPassword(user, callback) {
  db.query(
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

export function findUserByEmail(user, callback) {
  db.query(
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

export function createUser(user, callback) {
  db.query(
    "INSERT INTO users (profileName, email, password) VALUES (?,?,?)",
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

export function updateProfileName(userId, profileName, callback) {
  db.query(
    `UPDATE users
    SET profileName = ?
    WHERE userId = ?`,
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

export function updateProfileImage(userId, profileImage, callback) {
  db.query(
    `UPDATE users
    SET profileImage = ?
    WHERE userId = ?`,
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

export function deleteUser(userId, callback) {
  console.log("deleting user", userId);
  db.query(
    `DELETE FROM users
    WHERE userId = ?`,
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
