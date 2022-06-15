import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';
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
                <div className="card match-card"> 
                    <div>
                        <h1 className="content">
                            {userList[count].firstname} {getAge(userList[count].birthday)}
                        </h1>
                        <div className="localisation"></div>

                        <div className="bio card-body">
                            {userList[count].bio}
                        </div>
                        <div className="Interet content"> 
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">{userList[count].interet[0].name}</li>
                                <li class="list-group-item flex-fill">{userList[count].interet[1].name}</li>
                                <li class="list-group-item flex-fill">{userList[count].interet[2].name}</li>
                                <li class="list-group-item flex-fill">{userList[count].interet[3].name}</li>
                                <li class="list-group-item flex-fill">{userList[count].interet[4].name}</li>
                            </ul>

                            
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
                </div>
                <div className="card like-card">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button"  className="btn btn-default btn-like" onClick={() => setCount(count + like(count, "dislike", userList))}>Dislike</button> 
                        <button type="button" className="btn btn-default btn-like"  onClick={() => setCount(count + like(count, "like", userList))}>Like</button>
                    </div>
                </div>
            </div>
        )
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