const express = require('express');

const app = express();

const mysql = require('mysql');

const profileRoutes = require('./routes/profile');

const userRoutes = require('./routes/user');

const db = mysql.createConnection({

   host: "localhost",

   user: "root",

   password: ""

 });

  db.connect(function(err) {
   if (err) throw err;
   console.log("Connecté à la base de données MySQL!");
 });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(bodyParser.json());

app.use('/api/profile', profileRoutes);
app.use('/api/auth', userRoutes);


 

module.exports = app;