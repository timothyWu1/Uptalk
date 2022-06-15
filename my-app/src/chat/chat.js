import React, { useEffect, useState } from "react";
import axios from "axios";
import Message from "./messaging.component"
import './chat.css'





 
export default function Match() {


    const [contactList, setContactList] = useState([]);
    const [target_id, setTarget_id] =  useState(0);
    const [target_name, setTarget_name] =  useState("");

    

    useEffect(() => {

        

        const requestOptions = {  
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
        };
        
        axios.get('http://localhost:3001/api/contact/list/'+getCookie("userId"),requestOptions).then(async res => {
            var data = await res.data;
            var finalList = []
            setTarget_id(data[0].contact_id);
            setTarget_name(data[0].firstname)
            
            // setTarget_id(3)
            for (var i in data) {
                // console.log(data[i])
                
                if (data[i].firstname !== undefined){
                    finalList.push(<button class="list-group-item" id="data[i].contact_id" value={data[i].contact_id} name={data[i].firstname} onClick={(msg) => {
                        setTarget_id(msg.target.value); 
                        setTarget_name(msg.target.name);
                        document.getElementById(target_id).active = true;
                        document.getElementById(target_id).disabled = true;
                    }}>{data[i].firstname}</button>);
                }
            } 

            setContactList(finalList);
            
            
        }) 
        
        
        
    }, []);


    return (
    <div className="message-app">
        <nav class="navbar fixed-top navbar-light bg-light nav-message">
            {/* <a class="nav-link" href="/setup">profil</a> */}
            <a class="nav-link" href="/">home</a>
            <p>{target_name}</p>
            <p></p>
        </nav>
        <div class="card" className="contact">
            <ul class="list-group list-group-flush" className="contactList">
                {contactList}
            </ul>
        </div>
        
        <div class="card" className="messaging">
                <Message target_id = {target_id}/>
        </div>
    </div>
        );
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
