import React, { Component, useState } from "react";
import "./CSS/todo.css";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";


export default function SignIn() {
  
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {submit(data)}


    
        return (
            <div className="card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Connexion</h2>


                    <div className="form-group">
                        <label>Email
                            <input name="email" {...register("email", { required: true, maxLength: 20 })} type="text" className="form-control" placeholder="Enter email" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password    
                            <input name="password" {...register("password", { required: true, maxLength: 100  })} type="password" className="form-control" placeholder="Enter password" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">login</button>
                </form>

                <p className="forgot-password text-right">
                    Not registered yet ? <a href="/register"> Register?</a>
                </p>
                
            </div>
        );
    
}


function submit(state) {

        


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