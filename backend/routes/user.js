const express = require('express');
const router = express.router;
const userController = require('../controllers/user');

router.post('/signup', userController.register);
router.post('/login', userController.login);



module.exports = router