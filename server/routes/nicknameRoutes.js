const express = require('express');
const router = express.Router();
const nicknameController = require('../controllers/nicknameController');
const authMiddleware = require('../middleware/authMiddleware');
const { authLimiter } = require('../config/rateLimiter');

router.post('/', authMiddleware, authLimiter, nicknameController.addNickname);
router.get('/', nicknameController.getNicknames);
router.delete('/', authMiddleware, nicknameController.deleteNickname);

module.exports = router;