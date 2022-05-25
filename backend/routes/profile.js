const express = require('express');

const router = express.Router();

const ProfileController = require('../controllers/profile');



router.post('/', ProfileController.createProfile);

router.get('/:id', ProfileController.getOneProfile);

// router.put('/:id', ProfileController.modifyProfile);

// router.get('/', ProfileController.getAllProfiles);



module.exports = router;