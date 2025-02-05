const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`Unhandled Error: ${err.message}`);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;