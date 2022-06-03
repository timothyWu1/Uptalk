

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



 
export default function SetupProfil() {

    const [userList, setUserList] = useState([]);
    const { reset, register, handleSubmit, watch, formState: { errors }  } = useForm();

    useEffect(() => {
        

        const requestOptions = {  
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
            body: JSON.stringify(userList) 
        };
        
        axios.get('http://localhost:3001/api/profile/'+getCookie("userId"),requestOptions).then(async res => {
            var data = await res.data;
            setUserList(data); 
            
            let defaultValues = {};
            defaultValues.firstname = data.firstname;
            defaultValues.lastname = data.lastname;
            reset({ ...defaultValues }); 
            
        })
        
  }, []);


    const onSubmit = (data) => {submit(data, userList)}
    return (
        
        <div className="card">


            <form onSubmit={handleSubmit(onSubmit)} >
                <h1>Profil</h1>


                <div>
                    <div style={{ borderTop: "5px solid #000 ", marginLeft: 350, marginRight: 20, width:100, float:"left" }}></div>
                    <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
                    <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
                </div>



                <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Suivant</button>

                    <button type="submit" className="btn btn-dark btn-lg btn-block"  id="submit_button">precedent</button>

                    <h1>Création de profil</h1>

                <div className="form-group">
                    <label>Prenom
                        <input  name="nom" {...register("firstname", { required: true, maxLength: 50, minLength: 2 })} type="text" className="form-control" placeholder="Votre prenom" />
                    </label>
                </div>

                <div className="form-group">
                    <label>Nom   
                        <input name="prenom" {...register("lastname", { required: true, maxLength: 50, minLength: 2 })} type="text" className="form-control" placeholder="Votre nom" />
                    </label>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Mettre a jour le profil</button>
            </form>



            
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



function submit(state, userList) {
        var firstname = state.firstname;
        var lastname = state.lastname;


        userList.firstname = firstname;
        userList.lastname = lastname;

            //blockage du bruteforce 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token")},
            body: JSON.stringify(userList)
        };
        fetch('http://localhost:3001/api/profile/'+getCookie("userId"), requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                alert(data.message)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    } 
