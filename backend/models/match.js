const mysql = require("../config/mysql");
const recherche = require('./recherche');
const profile = require('./profile');






class Match {

  static findMatchList = async (user_id) => {
    //------------------récupérer les préférences de l'utilisateur
    var user_search = await recherche.getRechercheById(user_id);
    user_search = user_search[0];


    var user_profile = await profile.getProfileById(user_id);
    user_profile = user_profile[0];
    //-----------------tri par sexe
    
    var sexe_target = ""
    if (user_search.preference_gender === "bi"){
        sexe_target = ['male','female']
    } else { 
        sexe_target = [user_search.preference_gender]
    }

    //---------------tri par préférence sexuelle de la target
    var user_sexe = user_profile.gender

    //----------------tri par age-----------

    let now = new Date()

    console.log(now.getFullYear())

    var month_diff = (now.getTime() - user_profile.birthday.getTime())
     //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);  
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
    //now calculate the age of the user  
    var user_age = Math.abs(year - 1970);   

    var target_age_min = user_search.age_min
    var target_age_max = user_search.age_max

    console.log(user_age);

    // target_age_min < target_age - NOW < target_age_max

    //---------------tri par utilisateur déja likés

    

    

    //-------------------------tri par localisation 



    //-----------------------------classement par préférence


    const sql = "SELECT profile.user_id FROM profile INNER JOIN recherche ON profile.user_id = recherche.user_id WHERE profile.gender IN (?) AND recherche.preference_gender IN (?, 'bi') AND DATE_SUB( NOW(), INTERVAL ? YEAR  ) > profile.birthday  AND DATE_SUB( NOW(), INTERVAL ? YEAR  ) < profile.birthday AND recherche.age_min < ? AND recherche.age_max > ?; ;  ";
    const result = await mysql.query(sql, [sexe_target, user_sexe, target_age_min, target_age_max, user_age, user_age]).catch((err) => err.message);


    return typeof result === "string" ? result : result[0];
  };
}


module.exports = Match;