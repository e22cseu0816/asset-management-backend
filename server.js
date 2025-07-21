// server.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// config
dotenv.config();
app.use(cors());
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/auth', require('./routes/authRoute'));


// Connect to MongoDB
connectDB();



// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));     // Auth routes
app.use('/api/admin', require('./routes/adminRoutes'));   // Admin routes
app.use('/api/user', require('./routes/userRoutes'));     // User routes
app.use(express.static('public'));


// Default route
app.get("/", (req, res) => {
  res.send("✅ Asset Management Backend is live!");
});
router.get('/', (req, res) => {
    res.send('Auth route working');
  });
  
  module.exports = router;
// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
