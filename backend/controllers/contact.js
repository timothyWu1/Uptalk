const contact = require('../models/contact');





exports.getContactById = (req, res, next) => {

  contact.getContactById(req.params.id)
  .then(response => {res.status(200).json(response[0]);})
}

exports.getContactListById = (req, res, next) => {
  contact.getContactListById(req.params.id)
  .then(response => {res.status(200).json(response);})
}

