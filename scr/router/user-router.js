const Router = require('express').Router;
const UserController = require('./../controllers/user-controller.js');
const { validationUser } = require("../middlewares/user-validation.js");

const userRouter = new Router();

userRouter.post('/registration', validationUser, UserController.registration);
userRouter.post('/login', validationUser, UserController.loginUser);
userRouter.get('/logout', UserController.logout);

module.exports = userRouter;