const profile = require('../models/profile');
const interet_relation = require('../models/interet_relation')
const localisation = require('../models/localisation')
const question_relation = require('../models/question_relation')
const recherche = require('../models/recherche')




exports.findMatch = (req, res, next) => {
    user_id = req.params.user_id
    target_id = 1;
    res.status(200).json(target_id);
}