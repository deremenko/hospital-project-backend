const Router = require('express').Router;
const ReceptionController = require('../controllers/reception-controller.js');
const { validationReception } = require('../middlewares/reception-validation.js');
const authMiddleware = require('../middlewares/auth-middleware.js');

const receptionRouter = new Router

receptionRouter.get('/', authMiddleware, ReceptionController.getAllReceptions);
receptionRouter.post('/', authMiddleware, validationReception, ReceptionController.createReception);
receptionRouter.delete('/:id', authMiddleware, ReceptionController.deleteReception);
receptionRouter.patch('/:id', authMiddleware, validationReception, ReceptionController.editReception);

module.exports = receptionRouter;