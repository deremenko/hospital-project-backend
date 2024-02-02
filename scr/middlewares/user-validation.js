const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');
const validationUser = [
  check('login')
    .isString()
    .isLength({ min: 6 })
    .trim()
    .notEmpty(),
  check('password')
    .isString()
    .isLength({ min: 6 })
    .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/),
  validatorResult
];
module.exports = {
  validationUser,
};