require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const logger = require('./utils/logger');

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;