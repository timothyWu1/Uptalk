import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";



export default function SetupProfil() {

    const user = User();
    // alert(user)

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstName: user.firstname,
            lastName: user.lastname,
        }
    });

    const onSubmit = (data) => {submit(data)}

    


    return (
        
        <div className="card">

            {/* {user} */}

            <form onSubmit={handleSubmit(onSubmit)} >
            {/* <Button
variant="contained"
color="default"         
startIcon={<ArrowBackIcon />}
>button</Button> */}
                <h1>Profil</h1>

                <div className="form-group">
                    <label>FirstName
                        <input name="nom" {...register("firstname", { required: true, maxLength: 20 })} type="text" className="form-control" placeholder="Your firstname" />
                    </label>
                </div>

                <div className="form-group">
                    <label>Firstname   
                        <input name="prenom" {...register("lastname", { required: true, maxLength: 20 })} type="text" className="form-control" placeholder="Your lastname" />
                    </label>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Register</button>
            </form>



            
        </div>
    );
}

function User(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:3001/api/profile/2', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            alert(data.username)
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
            
}


function submit(state) {
        var firstname = state.firstname;
        var lastname = state.lastname;

            //blockage du bruteforce 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: firstname, lastname: lastname})
        };
        console.log(requestOptions)
        fetch('http://localhost:3001/api/profile', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    } 
