

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
        
        


            <form onSubmit={handleSubmit(onSubmit)} className="profilform">
                <h1 className="title">Profil</h1>

                    <h1 className="title">Création de profil</h1>

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
// import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// export default class SignUp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nom : '',
//             prenom: '',
//         }

//         this.buttonDisabled = true;
//         this.errormsg = "";

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {

//         this.setState(
//             {[event.target.name] : event.target.value}
//         );

//     }

//     handleSubmit(event) {
//         var nom = this.state.nom;
//         var prenom = this.state.prenom;

//             //mise a jour du profil

//         event.preventDefault();
//     }

//     render() {
//         const ColoredLine = ({ color }) => (
//             <hr
//                 style={{
//                     color: color,
//                     backgroundColor: color,
//                     height: 8
//                 }}
//             />
//         );

//         if (this.state.nom.length < 2 || this.state.nom.length>25 || this.state.prenom.length < 2 || this.state.prenom.length>25 || this.state.anniversaire.length !== 10){
//             this.buttonDisabled = true;
//         } else {
//             this.buttonDisabled = false;
//         }

//         return (

//             <div className="card">
//                 <div>
//                     <div style={{ borderTop: "5px solid #000 ", marginLeft: 350, marginRight: 20, width:100, float:"left" }}></div>
//                     <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
//                     <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
//                 </div>

//                 <form onSubmit={this.handleSubmit}  method="post" >

//                 <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Suivant</button>

//                     <button type="submit" className="btn btn-dark btn-lg btn-block"  id="submit_button">precedent</button>

//                     <h1>Création de profil</h1>

//                     <div className="form-group">
//                         <label>Votre prenom
//                             <input name="nom" value={this.state.lastname}  onChange={this.handleChange} type="text" className="form-control" placeholder="prénom" />
//                         </label>
//                     </div>

//                     <div className="form-group">
//                         <label>Votre nom
//                             <input name="prenom" value={this.state.firstname}  onChange={this.handleChange} type="text" className="form-control" placeholder="nom" />
//                         </label>
//                     </div>

//                 </form>

//             </div>
//         );
//     }
// }




import { Dimensions, View, Image } from "react-native";
import React, { Component } from "react";
import "./styles/styles.css";



const { width, height } = Dimensions.get("screen");

export default class secondProfil extends Component {





  // $('#multi').mdbRange({
  //   single: {
  //     active: true,
  //     multi: {
  //       active: true,
  //       rangeLength: 1
  //     },
  //   }
  // });
  constructor(props) {
    super(props);
    this.state = {
      anniversaire: "",
      sexe: "",
    };

    this.buttonDisabled = true;
    this.errormsg = "";

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var anniversaire = this.state.anniversaire;
    var sexe = this.state.sexe;

    //mise a jour du profil

    event.preventDefault();
  }

  render() {
    return (
      <div className="card">
        <div
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderTop: "5px solid #fff ",
              marginLeft: 360,
              marginRight: 20,
              width: 100,
              float: "left",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #000 ",
              marginLeft: 20,
              marginRight: 20,
              width: 100,
              float: "left",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #fff ",
              marginLeft: 20,
              marginRight: 20,
              width: 100,
              float: "left",
            }}
          ></div>
        </div>

        <form onSubmit={this.handleSubmit} method="post">
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            id="submit_button"
          >
            Suivant
          </button>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            id="submit_button"
          >
            precedent
          </button>
        </form>

        <div className="form-group">
          <label>
            Localisation
            <input
              name="ville"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="votre ville"
            />
          </label>
          <label>
            <input
              name="postal"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Code postal"
            />
          </label>
          <select>
            <option value="q">recherche :</option>
            <option value="q">
              Moins de 1 kilomètres
            </option>
            <option value="q">
            Moins de 3 kilomètres
            </option>
            <option value="q">
            Moins de 5 kilomètres
            </option>
            <option value="q">
            plus de 5 kilomètres
            </option>
          </select>

          {/* <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/> */}
          {/* <form class="multi-range-field my-5 pb-5">Zone de recherche
  <input id="multi" class="multi-range" type="range" />
</form> */}

{/* <div class="container mt-3">
  <div class="multi-ranges-basic"></div>
<div id="multi-ranges-basic-value" class="mt-3">
  Value:
  <span class="d-flex flex-column">
    <div>First:</div>
    <div>Second:</div>
  </span>
</div>
</div> */}



        </div>
        <div>
          <label>
            Votre Age
            <input
              name="age"
              value={this.state.old}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="votre age"
            />
          </label>
          <select>
            <option value="q">recherche :</option>
            <option value="q">
              plus ou moins 1 ans
            </option>
            <option value="q">
            plus ou moins 3 ans
            </option>
            <option value="q">
            plus ou moins 5 ans
            </option>
            <option value="q">
              peu m'importe
            </option>
          </select>
        </div>
        <p className="forgot-password text-right">
          Déja enregistré(e) ? <a href="/login">Se connecter</a>
        </p>
      </div>
    );
  }
}
