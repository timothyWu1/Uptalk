const profile = require('../models/profile');
const interet_relation = require('../models/interet_relation')
const localisation = require('../models/localisation')
const question_relation = require('../models/question_relation')
const recherche = require('../models/recherche')
const match = require('../models/match')





exports.findMatch = (req, res, next) => {
    id = req.params.id
    match.findMatchList(id)
    .then(response => {res.status(200).json(response);})
    
}

exports.addLike = (req, res, next) => {
    match.addLike(req.body.user_id, req.body.target_id, req.body.type)
    .then(response => {
        //test si il y a un match 
        



        res.status(200).json(response);})
    
}