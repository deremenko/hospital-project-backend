const userRoutes = require('./user');
const receptionRoutes = require('./reception');

const router = require('express').Router();

router.use('/user', userRoutes);
router.use('/reception', receptionRoutes);

module.exports = router;