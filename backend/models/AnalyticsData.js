// models/AnalyticsData.js
const mongoose = require("mongoose");

const analyticsDataSchema = new mongoose.Schema({
  day: { type: Date, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  A: { type: Number, required: true },
  B: { type: Number, required: true },
  C: { type: Number, required: true },
  D: { type: Number, required: true },
  E: { type: Number, required: true },
  F: { type: Number, required: true },
});

const AnalyticsData = mongoose.model("AnalyticsData", analyticsDataSchema);
module.exports = AnalyticsData;
