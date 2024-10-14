// controllers/analyticsController.js
const AnalyticsData = require("../models/AnalyticsData");

// Function to fetch all data
const getAllData = async (req, res) => {
  try {
    const data = await AnalyticsData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to add new data
const addData = async (req, res) => {
  const { day, age, gender, A, B, C, D, E, F } = req.body;

  const newData = new AnalyticsData({
    day,
    age,
    gender,
    A,
    B,
    C,
    D,
    E,
    F,
  });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other functions for filtering and analytics as needed
module.exports = { getAllData, addData };
