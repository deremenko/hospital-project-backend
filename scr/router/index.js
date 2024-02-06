const Router = require('express').Router;
const UserController = require('./../controllers/user-controller.js');
const ReceptionController = require('./../controllers/reception-controller.js');
const { validationUser } = require("../middlewares/user-validation.js");
const { validationReception } = require('../middlewares/reception-validation.js');
const router = new Router();

router.post('/registration', validationUser, UserController.registration);
router.post('/login', validationUser, UserController.loginUser);
router.get('/logout', UserController.logout);
router.post('/reception/add', validationReception, ReceptionController.createReception);

module.exports = router;