const express = require('express');
const router = express.Router();

// Sample route for admin
router.get('/', (req, res) => {
  res.send('Admin route working');
});

module.exports = router;
