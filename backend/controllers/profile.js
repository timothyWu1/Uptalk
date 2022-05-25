const profile = require('../models/profile');


exports.createProfile = (req, res, next) => {
    console.log(req.body);
    req.status(201).json({
        message:'Objet créé !'
    })
}

exports.getOneProfile = (req, res, next) => {
  const stuff = [
    {
      profile_id: '1',
      firstname: 'Damien',
      lastname: 'Drozd',
      gender: 'homme',
      birthday: "2001-08-09"
    }
  ];
  res.status(200).json(stuff);
}