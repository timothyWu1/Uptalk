import React, {  useEffect, useState  } from "react";
import { useForm } from "react-hook-form";
import "./styles/styles.css";
import axios from "axios";


export default function SecondProfil() {

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
            defaultValues.birthday = data.birthday;
            defaultValues.gender = data.gender;
            reset({ ...defaultValues }); 
            
        })
        
  }, []);


    const onSubmit = (data) => {submit(data, userList)}
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="profilform">

          <h1 className="title">Profil</h1>

          <div className="form-group">
            <label>
              Date de naissance
              <input
                name="anniversaire"
                {...register("birthday", { required: true, maxLength: 50, minLength: 2 })}
                type="date"
                className="form-control"
                placeholder="date de naissance"
              />
            </label>
          </div>
          <div className="container">
            <div className="form-group">
              <h1>Quel est votre sexe ?</h1>
            </div>
            <div>
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input type="radio" {...register("gender")} value="Male" id="men" />
                <label for="homme">Homme</label>

                <input type="radio" {...register("gender")} value="Female" id="women" />
                <label for="femme">Femme</label>
              </div>
            </div>
            

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
        var birthday = state.birthday;
        var gender = state.gender;


        userList.birthday = birthday;
        userList.gender = gender;
        console.log(userList);

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

