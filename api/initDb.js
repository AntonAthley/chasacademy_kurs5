const pool = require("./dbConfig.js");

async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);
    console.log("Users table is ready");
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
}

module.exports = initDb;
