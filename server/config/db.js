const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "testUser",
  password: "test",
  database: "db_1",
});

db.query("DELETE FROM `users`", () => {
  console.log("deleted users");
});

db.query(
  "INSERT INTO `users` (`userId`, `password`, `profileName`) VALUES ('Person1', 'password1', 'Test1'), ('Person2', 'password2', 'Test2');",
  () => {
    console.log("added test users");
  }
);

module.exports = db;
