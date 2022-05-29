const mysql = require("../config/mysql");




class Interet_Relation {
  static addInteret_Relation = async (user_id, interet_nb) => {
    const sql = "INSERT INTO interet_relation (user_id, interet_nb) VALUES (?, ?)";

    const result = await mysql.query(sql, [user_id, interet_nb]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getInteret_RelationById = async (user_id) => {
    const sql = "SELECT * FROM interet_relation WHERE user_id = ?";

    const result = await mysql.query(sql, user_id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };


  static getAllInteret_Relation = async () => {
    const sql = "SELECT * FROM interet_relation";

    const result = mysql.query(sql).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static updateInteret_RelationById = async (user_id, interet_id ,interet_nb) => {
    const sql = "UPDATE interet_relation SET interet_id = ? WHERE user_id = ? AND interet_nb = ?";
    var values = [interet_id,user_id, interet_nb]

    mysql.query(sql, values, function (err, result) {
      if (err) throw err;
      return result;
    });
  };

} 
  

module.exports = Interet_Relation;