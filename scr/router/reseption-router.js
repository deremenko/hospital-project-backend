const Router = require('express').Router;
const ReceptionController = require('./../controllers/reception-controller.js');
const { validationReception } = require('../middlewares/reception-validation.js');
const { decodedToken } = require('../middlewares/decoded-token-middleware.js');

const receptionRouter = new Router

receptionRouter.post('/reception', validationReception, decodedToken,  ReceptionController.createReception);

module.exports = receptionRouter;