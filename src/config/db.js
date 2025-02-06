const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "testUser",
  password: "test",
  database: "db_1",
});

module.exports = db;
