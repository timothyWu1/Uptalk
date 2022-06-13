import React, { useEffect, useState } from "react";
import axios from "axios";
const Math = require("mathjs")





 
export default function Match() {


    const [userList, setUserList] = useState([]);
     const [count, setCount] = useState(0);
    

    useEffect(() => {

        // console.log("test")

        const requestOptions = {  
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
            body: JSON.stringify(userList) 
        };
        
        axios.get('http://localhost:3001/api/match/'+getCookie("userId"),requestOptions).then(async res => {
            var data = await res.data;
            

            

            setUserList(data);  

            console.log(data);
            
        }) 
        
    }, []);


    if (userList[count] !== undefined){
        return (
        <div>
            <div className="card"> 
                <div className="center">
                    {userList[count].firstname} {getAge(userList[count].birthday)}
                </div>
                <div className="localisation"></div>

                <div className="bio">
                    {userList[count].bio}
                </div>
                <div className="Interet">
                    {userList[count].interet[0].name}
                    {userList[count].interet[1].name}
                    {userList[count].interet[2].name}
                    {userList[count].interet[3].name}
                    {userList[count].interet[4].name}
                </div>
                <div className="Question">
                    {userList[count].question[0].name}
                </div>
                <div className="Reponse">
                    {userList[count].question[0].reponse}
                </div>
                <div className="Question">
                    {userList[count].question[1].name}
                </div>
                <div className="Reponse">
                    {userList[count].question[1].reponse}
                </div>
                <div className="Question">
                    {userList[count].question[2].name}
                </div>
                <div className="Reponse">
                    {userList[count].question[2].reponse}
                </div>
            </div>
            <div className="card">
                <button onClick={() => setCount(count + like(count, "dislike", userList))}>Dislike</button> <button onClick={() => setCount(count + like(count, "like", userList))}>Like</button>
            </div>
        </div>
        );
    }
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

            
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    return 1;
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