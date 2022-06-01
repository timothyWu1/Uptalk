const profile = require('../models/profile');
const interet_relation = require('../models/interet_relation')
const localisation = require('../models/localisation')
const question_relation = require('../models/question_relation')
const recherche = require('../models/recherche')

const auth = require('../middleware/auth');




exports.getProfileById = (req, res, next) => {

  profile.getProfileById(req.params.id)
  .then(response => {res.status(200).json(response[0]);})
}

exports.getLocalisationById = (req, res, next) => {
  localisation.getLocalisationById(req.params.id)
  .then(response => {res.status(200).json(response);})
}

exports.getRechercheById = (req, res, next) => {
  recherche.getRechercheById(req.params.id)
  .then(response => {res.status(200).json(response);})
}

exports.getInteretById = (req, res, next) => {
  interet_relation.getInteret_RelationById(req.params.id)
  .then(response => {res.status(200).json(response);})
}

exports.getQuestionById = (req, res, next) => {
  question_relation.getQuestion_RelationById(req.params.id)
  .then(response => {res.status(200).json(response);})
} 

//----modification-------


exports.updateProfileById = (req, res, next) => {
  profile.updateProfileById(req.body.user_id, req.body.firstname, req.body.lastname, req.body.gender, req.body.birthday, req.body.bio)
  .then(response => {res.status(200).json({message:"utilisateur modifié avec succés"})})
}

exports.updateLocalisationById = (req, res, next) => {
  localisation.updateLocalisationById(req.body.user_id, req.body.longitude, req.body.lattitude)
  .then(response => {res.status(200).json(response);})
}

exports.updateRechercheById = (req, res, next) => {
  recherche.updateRechercheById(req.body.user_id, req.body.preference_gender, req.body.zone_recherche, req.body.age_min, req.body.age_max)
  .then(response => {res.status(200).json(response);})
} 

exports.updateInteretById = (req, res, next) => {
  interet_relation.updateInteret_RelationById(req.body.user_id , req.body.interet_id ,req.body.interet_nb)
  .then(response => {res.status(200).json(response);})
}

exports.updateQuestionById = (req, res, next) => {
  question_relation.updateQuestion_RelationById(req.body.user_id, req.body.question_id, req.body.reponse, req.body.question_nb)
  .then(response => {res.status(200).json(response);})
}  