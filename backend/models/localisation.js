const mysql = require("../config/mysql");




class Localisation {
  static addLocalisation = async (user_id) => {
    const sql = "INSERT INTO localisation (user_id) VALUES (?)";

    const result = await mysql.query(sql, [user_id]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getLocalisationById = async (user_id) => {
    const sql = "SELECT * FROM localisation WHERE id = '?'";

    con.query(sql, user_id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };


  static getAllLocalisation = async () => {
    const sql = "SELECT * FROM localisation";

    const result = mysql.query(sql).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static updateLocalisationById = async (user_id, longitude, lattitude) => {
    const sql = "UPDATE localisation SET longitude = ?, lattitude = ? WHERE id = ?";
    var values = [longitude, lattitude ,user_id]

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      return result;
    });
  };

} 
  

module.exports = Localisation;