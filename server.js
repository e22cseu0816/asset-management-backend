// server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', require('./routes/authRoutes'));     // Auth routes
app.use('/api/admin', require('./routes/adminRoutes'));   // Admin routes
app.use('/api/user', require('./routes/userRoutes'));     // User routes

// Default route
app.get("/", (req, res) => {
  res.send("✅ Asset Management Backend is live!");
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
