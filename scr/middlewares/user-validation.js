const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const validationUser = [
  check('login')
    .isString()
    .trim()
    .isLength({ min: 4 }),
  check('password')
    .isString()
    .trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/),
  validatorResult
];

module.exports = {
  validationUser,
};