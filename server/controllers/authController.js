const User = require('../models/User');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const { sanitizeInput } = require('../utils/sanitizer');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }
  );
};

exports.register = async (req, res) => {
  try {
    const sanitizedBody = {
      email: sanitizeInput(req.body.email),
      password: req.body.password, 
      confirmPassword: req.body.confirmPassword
    };
    const { email, password, confirmPassword } = sanitizedBody;
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Passwords do not match'
      });
    }

    let existingUser = await User.findOne({ email });

    if (existingUser) {
      logger.warn(`Registration attempt with existing email: ${email}`);
      return res.status(400).json({
        message: 'User already exists'
      });
    }

    const user = new User({ email, password });
    await user.save();

    const token = generateToken(user);

    logger.info(`User registered!`);

    res.status(201).json({
      message: 'User registered successfully',
      token
    });
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    res.status(500).json({
      message: 'Server error during registration'
    });
  }
};

exports.login = async (req, res) => {
  try {
    const sanitizedBody = {
      email: sanitizeInput(req.body.email),
      password: req.body.password
    };

    const { email, password } = sanitizedBody;
    const user = await User.findOne({ email });

    if (!user) {
      logger.warn(`Login attempt with non-existent email: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      logger.warn(`Failed login attempt for email: ${email}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    logger.info(`User logged in: ${email}`);
    res.json({ 
      message: 'Login successful', 
      token 
    });

  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(500).json({ message: 'Server error during login' });
  }
};