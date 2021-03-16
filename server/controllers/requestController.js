const router = require('express').Router();

const authServices = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');

// Home
router.get('/', (req, res) => {
    res.send('Default Request');
});

// Test
router.get('/test', (req, res) => {
    res.send('Test');
    console.log('Request received');
});

// TO DO
// Register
// Login
// Products with filters
// Route that does not exist response

module.exports = router;