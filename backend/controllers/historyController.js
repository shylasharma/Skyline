const db = require("../database/database");

// Get all history
const getHistory = (req, res) => {

  db.all(
    `SELECT * FROM weather_history
     ORDER BY searched_at DESC`,
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        data: rows,
      });

    }
  );

};

// Delete one history item
const deleteHistory = (req, res) => {

  const { id } = req.params;

  db.run(
    `DELETE FROM weather_history
     WHERE id = ?`,
    [id],
    function (err) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "History deleted successfully.",
      });

    }
  );

};

// Delete all history
const clearHistory = (req, res) => {

  db.run(
    `DELETE FROM weather_history`,
    [],
    function (err) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "All history cleared.",
      });

    }
  );

};

const toggleFavorite = (req, res) => {

  const { id } = req.params;

  db.run(
    `
    UPDATE weather_history
    SET favorite =
      CASE
        WHEN favorite = 0 THEN 1
        ELSE 0
      END
    WHERE id = ?
    `,
    [id],
    function (err) {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Favorite updated.",
      });

    }
  );

};

module.exports = {
  getHistory,
  deleteHistory,
  clearHistory,
  toggleFavorite,
};