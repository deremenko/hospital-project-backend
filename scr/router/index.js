const Router = require('express').Router;
const UserController = require('./../controllers/user-controller.js');
const { validationUser } = require("../middlewares/user-validation.js");
const router = new Router();

router.post('/registration', validationUser, UserController.registration);

module.exports = router;