const profile = require('../models/profile');
const interet_relation = require('../models/interet_relation')
const localisation = require('../models/localisation')
const question_relation = require('../models/question_relation')
const recherche = require('../models/recherche')




exports.getProfileById = (req, res, next) => {
  profile.getProfileById(req.params.id)
  .then(response => {res.status(200).json(response);})
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
  profile.updateProfileById(req.params.user_id, req.params.firstname, req.params.lastname, req.params.gender, req.params.birthday, req.params.bio)
  .then(response => {res.status(200).json(response);})
}

exports.updateLocalisationById = (req, res, next) => {
  localisation.updateLocalisationById(req.params.user_id, req.params.longitude, req.params.lattitude)
  .then(response => {res.status(200).json(response);})
}

exports.updateRechercheById = (req, res, next) => {
  recherche.updateRechercheById(req.params.user_id, req.params.preference_gender, req.params.zone_recherche, req.params.age_min, req.params.age_max)
  .then(response => {res.status(200).json(response);})
} 

exports.updateInteretById = (req, res, next) => {
  interet_relation.updateInteret_RelationById(req.params.user_id , req.params.interet_id ,req.params.interet_nb)
  .then(response => {res.status(200).json(response);})
}

exports.updateQuestionById = (req, res, next) => {
  question_relation.updateQuestion_RelationById(req.params.user_id, req.params.question_id, req.params.reponse, req.params.question_nb)
  .then(response => {res.status(200).json(response);})
}  