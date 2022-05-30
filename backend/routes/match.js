const express = require('express');

const router = express.Router();

const matchController = require('../controllers/match');




router.get('/:id', matchController.findMatch);





module.exports = router;