import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";



 
export default function SetupProfil() {

    const [userList, setUserList] = useState([]);
    const { reset, register, handleSubmit, watch, formState: { errors }  } = useForm();
    

    useEffect(() => {
        console.log(getCookie("userId"));

        const requestOptions = {  
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "authorization": getCookie("token") },
            body: JSON.stringify(userList) 
        };
        
        axios.get('http://localhost:3001/api/profile/'+getCookie("userId"),requestOptions).then(async res => {
            var data = await res.data;
            setUserList(data);
            let defaultValues = {};
            defaultValues.firstname = userList.firstname;
            defaultValues.lastname = userList.lastname;
            reset({ ...defaultValues }); 
            if (!res.ok) {
                // get error message from body or default to response statusText
                const error = (res.data && res.data.message) || res.statusText;
                return Promise.reject(error);
            }
            console.log(userList)
        })
        
  }, []);


    const onSubmit = (data) => {submit(data, userList)}

    


    return (
        
        <div className="card">


            <form onSubmit={handleSubmit(onSubmit)} >
            {/* <Button
variant="contained"
color="default"         
startIcon={<ArrowBackIcon />}
>button</Button> */} 
                <h1>Profil</h1>

                <div className="form-group">
                    <label>FirstName
                        <input value={userList.firstname} onChange={setUserList(userList.firstname)} name="nom" {...register("firstname", { required: true, maxLength: 50, minLength: 2 })} type="text" className="form-control" placeholder="Your firstname" />
                    </label>
                </div>

                <div className="form-group">
                    <label>Firstname   
                        <input name="prenom" {...register("lastname", { required: true, maxLength: 50, minLength: 2 })} type="text" className="form-control" placeholder="Your lastname" />
                    </label>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Edit profil</button>
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
