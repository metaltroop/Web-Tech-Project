const express = require('express');
const router = express.Router();
const { postcontactus, getContactus } = require('../controllers/contactusController');

// Define the route for handling contact form submissions
router.post('/', postcontactus);
router.get('/',getContactus);

module.exports = router;
