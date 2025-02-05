const Joi = require('joi');
const xss = require('xss');

const registrationSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Invalid email format'
    }),
  
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.pattern.base': 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character'
    }),
  
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords must match'
    })
});

const validateRegistration = (req, res, next) => {
  const sanitizedBody = {
    email: xss(req.body.email),
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  const { error } = registrationSchema.validate(sanitizedBody);
  
  if (error) {
    return res.status(400).json({
      message: 'Validation Error',
      details: error.details.map(detail => detail.message)
    });
  }
  
  next();
};

module.exports = { validateRegistration };