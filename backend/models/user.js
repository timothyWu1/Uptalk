const mysql = require("../config/mysql");




class User {
  static addUser = async (email, password) => {
    const sql = "INSERT INTO user (email, password) VALUES (?, ?)";

    const result = await mysql.query(sql, [email, password]).catch((err) => err.message);
    console.log(result);
    return typeof result === "string" ? result : result[0];
  };

} 
  

module.exports = User;