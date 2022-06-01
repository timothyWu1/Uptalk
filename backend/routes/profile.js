const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

const ProfileController = require('../controllers/profile');




router.get('/:id', ProfileController.getProfileById);

router.get('/localisation/:id', ProfileController.getLocalisationById);

router.get('/recherche/:id', ProfileController.getRechercheById);

router.get('/interet/:id', ProfileController.getInteretById);

router.get('/question/:id', ProfileController.getQuestionById);



//routes de modifications

router.post('/:id', ProfileController.updateProfileById);

router.post('/localisation/:id', ProfileController.updateLocalisationById);

router.post('/recherche/:id', ProfileController.updateRechercheById);

router.post('/interet/:id', ProfileController.updateInteretById);

router.post('/question/:id', ProfileController.updateQuestionById);
 



module.exports = router;