// scripts/seedData.js
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AnalyticsData = require("../models/AnalyticsData");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const seedData = async () => {
  try {
    // Read dataset from CSV or other format
    const data = fs.readFileSync("path/to/your/dataset.csv", "utf8");
    const lines = data.split("\n").slice(1); // Skip header

    for (const line of lines) {
      const [day, age, gender, A, B, C, D, E, F] = line.split(",");
      const analyticsData = new AnalyticsData({
        day: new Date(day),
        age,
        gender,
        A: parseInt(A),
        B: parseInt(B),
        C: parseInt(C),
        D: parseInt(D),
        E: parseInt(E),
        F: parseInt(F),
      });

      await analyticsData.save();
    }

    console.log("Data seeded successfully");
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

seedData();
