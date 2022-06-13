import React, { Component, useState } from "react";
import "./CSS/todo.css";
import { useForm } from "react-hook-form";


export default function SignUp() {
  


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {submit(data, errormsg)}

    var errormsg = "";

    return (
      <div className="card register">
        <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
          <div className="form-group ">
                        <label>Lastname
                            <input className="inputform" {...register("email", { required: true, maxLength: 20 })} type="text" placeholder="Enter email"/>
                        </label>
                    </div>

          <br />          
          <label>password :</label> <br />
            <input className="inputform" {...register("password", { required: true, maxLength: 100, minLength:6  })} type="password"  placeholder="Enter password" />
          <br />
          <label>confirm Password :</label>
          <br />{" "}
          <input
            type="password"
            className="inputform"
            {...register("repeatPassword", { required: true, maxLength: 100, minLength:6 })}
            
            placeholder="Enter password"
          />
          <br />
          {/* <input type="submit" value="Register" /> */}
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            id="submit_button"
          >
            Register
          </button>

        </form>
        <p>{errormsg}</p>

        <p className="forgot-password text-right">
          Already registered <a href="/login">log in?</a>
        </p>
      </div>
    );
  }

  function submit(state, errormsg) {

    
    var email = state.email;
    var password = state.password;
    var repeatPassword = state.repeatPassword;

    if (password !== repeatPassword) {
      errormsg = "les deux mots de passe ne correspondent pas";
    } else if (password.length < 6) {
      errormsg = "le mot de passe est trop court";
    } else if (password.length > 100) {
      errormsg = "le mot de passe est trop long";
    } else if (email.length < 6) {
      errormsg = "l'email est trop court";
    } else if (email.length > 254) {
      errormsg = "l'email est trop long";
    } else if (/@/.test(email) === false) {
      errormsg = "l'email n'est pas correct";
    } else {
      // alert('A email was submitted: ' + email + "\npassword = " + password  + "\nReapeat Password = " + repeatPassword);
      //test des caracteres spéciaux.

      //envoi de la requête sur le server

      // POST request using fetch with error handling
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      };
      console.log(requestOptions);
      fetch("http://localhost:3001/api/auth/signup", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            alert(data.message)
            return Promise.reject(error);
          } else { 
            alert(data.message)
            login(state);
          }

         
        })
        .catch((error) => {
          
          console.error("There was an error!", error);
        });

      //vérification de la réponse du server sur

      //envoi d'une requête de login de l'utilisateur
    }
    if (errormsg !== "") {
      alert(errormsg);
    }
  }


function login(state) {

    


    // alert('A email was submitted: ' + state.email + "\npassword = " + state.password);
    // alert('A email was submitted: ' + state);
    var email = state.email;
    var password = state.password;

        //blockage du bruteforce 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password})
    };
    console.log(requestOptions)
    fetch('http://localhost:3001/api/auth/signin', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                alert(data.error)
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            } else { 
                console.log(data.userId)
                setCookie("token",data.token, 1); 
                setCookie("userId",data.userId, 1);

                window.location.replace("/setup");
            }

        })
        .catch(error => {
            console.error('There was an error!', error);
        });

        //redirection

} 


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}
  
