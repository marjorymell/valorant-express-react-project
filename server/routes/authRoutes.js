const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegistration } = require('../middleware/validationMiddleware');
const { authLimiter } = require('../config/rateLimiter');

router.post('/register', authLimiter, validateRegistration, authController.register );
router.post('/login', authLimiter, authController.login );

module.exports = router;