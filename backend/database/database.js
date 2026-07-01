const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "weather.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ SQLite Database Connected");

    db.run(`
      CREATE TABLE IF NOT EXISTS weather_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT NOT NULL,
    country TEXT,
    temperature REAL,
    humidity INTEGER,
    weather TEXT,
    favorite INTEGER DEFAULT 0,
    searched_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
    `);
  }
});

module.exports = db;