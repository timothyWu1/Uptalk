const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/user_setup', (req, res, next) => {

});

app.get('/api/get_user', (req, res, next) => {
  const stuff = [
    {
      user_id: '1',
      firstname: 'Damien',
      lastname: 'Drozd',
      gender: 'homme',
      birthday: "2001-08-09",
    }
  ];
  res.status(200).json(stuff);
});

 

module.exports = app;