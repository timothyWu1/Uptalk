const mysql = require("../config/mysql");




class Contact {
  static addContact = async (user_id, contact_id) => {
    const sql = "INSERT INTO contact (user_id, contact_id) VALUES (?, ?)";
 
    const result = await mysql.query(sql, [user_id, contact_id]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static getContactListById = async (user_id) => {
    const sql = "SELECT * FROM contact WHERE user_id = ?";

    const result = await mysql.query(sql, user_id).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

  static deleteContactById = async (user_id, contact_id) => {
    const sql = "DELETE * FROM contact WHERE user_id = ? AND contact_id = ?";

    const result = await mysql.query(sql, [user_id, contact_id]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };

} 
  

module.exports = Contact;