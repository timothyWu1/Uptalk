const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

const ChatController = require('../controllers/chat');



router.get('/',auth, ChatController.getMessageListById);



module.exports = router;