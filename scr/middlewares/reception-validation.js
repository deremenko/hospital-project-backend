const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const validationReception = [
  check('patient')
    .isString()
    .trim()
    .withMessage('ФИО пациента должно содержать лишь буквы')
    .notEmpty()
    .withMessage('ФИО пациента не может быть пустым'),
  check('doctor')
    .isString()
    .trim()
    .withMessage('ФИО доктора должно содержать лишь буквы')
    .notEmpty()
    .withMessage('ФИО доктора не может быть пустым'),
  check('date')
    .isISO8601("yyyy-mm-dd")
    .withMessage('Неверный формат даты')
    .isAfter((new Date()).toISOString()),
  check('complaint')
    .notEmpty()
    .withMessage('Поле жалобы не может быть пустым')
    .trim(),
  validatorResult
];

module.exports = {
  validationReception,
};