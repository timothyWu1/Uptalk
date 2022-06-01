const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const matchController = require('../controllers/match');




router.get('/:id',auth, matchController.findMatch);

router.post('/',auth, matchController.addLike);





module.exports = router;