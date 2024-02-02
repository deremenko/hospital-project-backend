const Router = require('express').Router;
const userController = require('./../controllers/user-controller.js');
const router = new Router();

router.post('/registration', userController.registration);
router.get('/refresh', userController.refresh);

module.exports = router;