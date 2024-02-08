const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const validationUser = [
  check('login')
    .trim()
    .isString()
    .isLength({ min: 4 }),
  check('password')
    .trim()
    .isString()
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/),
  validatorResult
];

module.exports = {
  validationUser,
};