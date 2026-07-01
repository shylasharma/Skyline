const express = require("express");

const router = express.Router();

const {
  exportJSON,
  exportCSV,
} = require("../controllers/exportController");

router.get("/json", exportJSON);

router.get("/csv", exportCSV);

module.exports = router;