// routes/analyticsRoutes.js
const express = require("express");
const { getAllData, addData } = require("../controllers/analyticsController");
const router = express.Router();

router.get("/", getAllData); // GET all data
router.post("/", addData); // POST new data

// Add more routes for filtering, updating, and deleting data as needed

module.exports = router;
