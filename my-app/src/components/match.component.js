import React, { useEffect, useState } from "react";
import axios from "axios";
const Math = require("mathjs")





 
export default function SetupProfil() {


    const [userList, setUserList] = useState([{}]);
    const nb = 0;

    useEffect(() => {

        const requestOptions = {  
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
            body: JSON.stringify(userList) 
        };
        
        axios.get('http://localhost:3001/api/match/'+getCookie("userId"),requestOptions).then(async res => {
            var data = await res.data;
            

            

            setUserList(data); 
            
        })
        
    }, []);


    

    return (
    <div>
        <div className="card"> 
            <div className="center">
                {userList[nb].firstname} {getAge(userList[nb].birthday)}
            </div>
            <div className="localisation"></div>

            <div className="bio">
                {userList[nb].bio}
            </div>
        </div>
        <div className="card">
            <button onClick={() => like(nb, "dislike", userList)}>Dislike</button> <button onClick={() => like(nb, "like", userList)}>Like</button>
        </div>
    </div>
  );
}



function like(nb, typeOfLike, userList) {

        //blockage du bruteforce 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
        body: JSON.stringify({user_id: getCookie("userId") , target_id: userList[nb].user_id, type: typeOfLike})
    };
    console.log(requestOptions)
    fetch('http://localhost:3001/api/match/'+getCookie("userId"), requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                // alert(data.error)
                const error = (data && data.message) || response.status;
                console.log(error)
                return Promise.reject(error);
            } 

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function getAge(birthday) {

    birthday = new Date(birthday)

    let now = new Date()

    var month_diff = (now.getTime() - birthday.getTime())
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);  
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
    //now calculate the age of the user  
    var user_age = Math.abs(year - 1970);

    return user_age
}