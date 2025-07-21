const express = require('express');
const router = express.Router();

// Sample route for user
router.get('/', (req, res) => {
  res.send('User route working');
});

module.exports = router;
