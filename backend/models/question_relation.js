const mysql = require("../config/mysql");




class Question_Relation {
  static addQuestion_Relation = async (user_id, question_nb) => {
    const sql = "INSERT INTO question_relation (user_id, question_nb) VALUES (?, ?)";

    const result = await mysql.query(sql, [user_id, question_nb]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getQuestion_RelationById = async (user_id) => {
    const sql = "SELECT * FROM question_relation WHERE user_id = ?";

    const result = await mysql.query(sql, user_id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };


  static getAllQuestion_Relation = async () => {
    const sql = "SELECT * FROM question_relation";

    const result = await mysql.query(sql).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static updateQuestion_RelationById = async (user_id,question_id, reponse ,question_nb) => {
    const sql = "UPDATE question_relation SET question_id = ?, reponse = ? WHERE user_id = ? AND question_nb = ?";
    var values = [question_id, reponse ,user_id, question_nb]

    mysql.query(sql, values, function (err, result) {
      if (err) throw err;
      return result;
    });
  };

} 
  

module.exports = Question_Relation;