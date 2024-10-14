// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const analyticsRoutes = require("./routes/analyticsRoutes");
const authenticateToken = require("./middleware/authMiddleware");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(authenticateToken); // Use if authentication is required

// Routes
app.use("/api/analytics", analyticsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
