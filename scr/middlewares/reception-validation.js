const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const validationReception = [
  check('patient')
    .isString()
    .withMessage('ФИО пациента должно содержать лишь буквы')
    .trim()
    .notEmpty()
    .withMessage('ФИО пациента не может быть пустым'),
  check('doctor')
    .isString()
    .withMessage('ФИО доктора должно содержать лишь буквы')
    .trim()
    .notEmpty()
    .withMessage('ФИО доктора не может быть пустым'),
  check('date')
    .isISO8601("yyyy-mm-dd")
    .isAfter((new Date()).toISOString())
    .withMessage('Неверный формат даты'),
  check('complaint')
    .trim()
    .notEmpty()
    .withMessage('Поле жалобы не может быть пустым'),
  validatorResult
];

module.exports = {
  validationReception,
};