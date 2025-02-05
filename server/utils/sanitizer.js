const xss = require('xss');

const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    return xss(input);
  }
  if (typeof input === 'object' && input !== null) {
    const sanitizedObj = {};
    Object.keys(input).forEach(key => {
      sanitizedObj[key] = sanitizeInput(input[key]);
    });
    return sanitizedObj;
  }
  return input;
};

module.exports = { sanitizeInput };