const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { validateRegistration } = require('../middleware/validationMiddleware');
const { authLimiter } = require('../config/rateLimiter');

router.post('/register', authLimiter, validateRegistration, authController.register );
router.post('/login', authLimiter, authController.login );
router.post('/logout', authMiddleware, authController.logout);

module.exports = router;