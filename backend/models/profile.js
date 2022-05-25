const mysql = require('mysql');



const Profile = function(profile) {
  this.user_id = profile.user_id;
  this.firstname = profile.firstname;
  this.lastname = profile.lastname;
  this.gender = profile.gender;
  this.birthday = profile.birthday;
  this.bio = profile.bio;
};
Profile.getById = (id, result) => {
  sql.query(`SELECT * FROM profile WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } 
    if (res.length) {
      console.log("found profil: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Profile.getAll = (result) => {
  let query = "SELECT * FROM profile";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("profile: ", res);
    result(null, res);
  });
};
Profile.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE profile SET firstname = ?, lastname = ?, gender = ?, birthday = ?, bio = ? WHERE id = ?",
    [tutorial.firstname, tutorial.lastname, tutorial.gender, tutorial.birthday, tutorial.bio, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};


module.exports = Profile;