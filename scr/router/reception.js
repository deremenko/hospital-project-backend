const Router = require('express').Router;
const ReceptionController = require('../controllers/reception-controller.js');
const { validationReception } = require('../middlewares/reception-validation.js');
const authMiddleware = require('../middlewares/auth-middleware.js');

const receptionRouter = new Router

receptionRouter.post('/', validationReception, authMiddleware,  ReceptionController.createReception);
receptionRouter.delete('/:id', authMiddleware, ReceptionController.deleteReception);

module.exports = receptionRouter;