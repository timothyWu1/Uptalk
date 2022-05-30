const mysql = require("../config/mysql");
const recherche = require('./recherche');
const profile = require('./profile');






class Match {

  static findMatchList = async (user_id) => {
    //récupérer les préférences de l'utilisateur
    var user_search = await recherche.getRechercheById(user_id);
    user_search = user_search[0];


    var user_profile = await profile.getProfileById(user_id);
    user_profile = user_profile[0];
    //tri par sexe
    
    var sexe_target = ""
    if (user_search.preference_gender === "bi"){
        sexe_target = ['male','female']
    } else { 
        sexe_target = [user_search.preference_gender]
    }

    //tri par préférence sexuelle de la target
    var user_sexe = user_profile.gender


    //tri par utilisateur déja likés

    

    

    //tri par localisation

    //tri par age

    //classement par préférence


    const sql = "SELECT profile.user_id FROM profile INNER JOIN recherche ON profile.user_id = recherche.user_id WHERE profile.gender IN (?) AND recherche.preference_gender IN (?, 'bi')  ";

    const result = await mysql.query(sql, [sexe_target, user_sexe]).catch((err) => err.message);
    return typeof result === "string" ? result : result[0];
  };
}


module.exports = Match;