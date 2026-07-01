const express = require("express");

const router = express.Router();

const {
  getHistory,
  deleteHistory,
  clearHistory,
  toggleFavorite,
} = require("../controllers/historyController");

router.get("/", getHistory);

router.delete("/:id", deleteHistory);

router.delete("/", clearHistory);

router.patch("/:id/favorite", toggleFavorite);
module.exports = router;