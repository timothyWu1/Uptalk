const mysql = require('mysql');


// const stuff = [
//     {
//       email: 'string , required', unique
//       password: 'string, required'
//     }

// constructor
const User = function(user) {
  this.email = user.email;
  this.password = user.password;
};
User.save = (newUser, result) => {
  sql.query("INSERT INTO login (email, password) VALUES ('?', '?')", [newUser.email, newUser.password]), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  };
};
User.getByEmail = (email, result) => {
  sql.query(`SELECT * FROM tutorials WHERE email = ${email}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } 
    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};
module.exports = User;