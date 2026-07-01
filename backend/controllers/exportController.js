const db = require("../database/database");
const { Parser } = require("json2csv");

// Export JSON
const exportJSON = (req, res) => {

  db.all(
    "SELECT * FROM weather_history ORDER BY searched_at DESC",
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.setHeader(
        "Content-Disposition",
        "attachment; filename=weather-history.json"
      );

      res.setHeader(
        "Content-Type",
        "application/json"
      );

      res.send(JSON.stringify(rows, null, 2));

    }
  );

};

// Export CSV
const exportCSV = (req, res) => {

  db.all(
    "SELECT * FROM weather_history ORDER BY searched_at DESC",
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (rows.length === 0) {
  return res.status(404).json({
    success: false,
    message: "No history available to export.",
  });
}

const parser = new Parser();

const csv = parser.parse(rows);

res.header("Content-Type", "text/csv");

res.attachment("weather-history.csv");

res.send(csv);

    }
  );

};

module.exports = {
  exportJSON,
  exportCSV,
};