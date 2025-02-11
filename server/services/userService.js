import db from "../config/db.js";

export function getAllUsers(callback) {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    callback(result);
  });
}

export function findUser(user, callback) {
  db.query(
    `SELECT * FROM users WHERE username = (?) AND password = (?)`,
    [user.username, user.password],
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
    "INSERT INTO users (username, password) VALUES (?,?)",
    [user.username, user.password],
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
