const Router = require('express').Router;
const userController = require('./../controllers/user-controller.js');
const { validationUser } = require("../middlewares/user-validation.js");
const router = new Router();

router.post('/registration', validationUser, userController.registration);

module.exports = router;