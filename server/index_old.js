import express from "express";
import cors from "cors";
// import pool from "./config/db.js";
import mariadb from "mariaDb";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  //res.send("Hello, World!");
  db = pool.getConnection();
  db.query("SELECT * FROM test_table");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const pool = mariadb.createPool({
  host: "mariadb_2425-cs7025-group1",
  user: "2425-cs7025-group1",
  password: "jdgMm6VkTKTmhMv6",
  database: "2425-cs7025-group1_db",
  connectionLimit: 5,
});
