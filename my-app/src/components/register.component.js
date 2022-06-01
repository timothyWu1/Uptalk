import React, { Component, useState } from "react";
import "./CSS/todo.css";
import { useForm } from "react-hook-form";


export default function SignUp() {
  


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {submit(data, errormsg)}

    var errormsg = "";

    return (
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
          <div className="form-group">
                        <label>Lastname
                            <input {...register("email", { required: true, maxLength: 20 })} type="text" placeholder="Enter email"/>
                        </label>
                    </div>

          <br />          
          <label>password :</label> <br />
            <input {...register("password", { required: true, maxLength: 100, minLength:6  })} type="password"  placeholder="Enter password" />
          <br />
          <label>confirm Password :</label>
          <br />{" "}
          <input
            type="password"
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
            window.location.replace("/login");  
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
  
