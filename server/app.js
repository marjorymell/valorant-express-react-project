require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const nicknameRoutes = require('./routes/nicknameRoutes');
const logger = require('./utils/logger');

const app = express();
app.set('trust proxy', 1);
connectDB();

app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/nicknames', nicknameRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;