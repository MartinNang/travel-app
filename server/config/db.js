const mariadb = require("mariaDb");

const pool = mariadb.createPool({
  host: "mariadb_2425-cs7025-group1",
  user: "2425-cs7025-group1",
  password: "jdgMm6VkTKTmhMv6",
  database: "2425-cs7025-group1_db",
  connectionLimit: 5,
});

export async function getConnection() {
  return await pool.getConnection();
}

module.exports = pool;
