const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const validationUser = [
  check('login')
    .notEmpty()
    .isString()
    .isLength({ min: 6 })
    .trim(),
  check('password')
    .notEmpty()
    .isString()
    .trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/),
  validatorResult
];

module.exports = {
  validationUser,
};