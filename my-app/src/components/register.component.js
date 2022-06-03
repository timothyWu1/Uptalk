import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./CSS/todo.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
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
    // alert('A email was submitted: ' + this.state);
    var email = this.state.email;
    var password = this.state.password;
    var repeatPassword = this.state.repeatPassword;

    if (password !== repeatPassword) {
      this.errormsg = "les deux mots de passe ne correspondent pas";
    } else if (password.length < 6) {
      this.errormsg = "le mot de passe est trop court";
    } else if (password.length > 100) {
      this.errormsg = "le mot de passe est trop long";
    } else if (email.length < 6) {
      this.errormsg = "l'email est trop court";
    } else if (email.length > 254) {
      this.errormsg = "l'email est trop long";
    } else if (/@/.test(email) === false) {
      this.errormsg = "l'email n'est pas correct";
    } else {
      // alert('A email was submitted: ' + this.state.email + "\npassword = " + this.state.password  + "\nReapeat Password = " + this.state.repeatPassword);
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
            return Promise.reject(error);
          }

          this.setState({ postId: data.id });
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });

      //vérification de la réponse du server sur

      //envoi d'une requête de login de l'utilisateur
    }
    if (this.errormsg !== "") {
      alert(this.errormsg);
    }
    event.preventDefault();
  }

  render() {
    const button = document.querySelector("button");
    if (this.state.password !== this.state.repeatPassword) {
      button.disabled = true;
      this.errormsg = "les mots de passe ne correspondent pas";
    } else {
      button.disabled = false;
      this.errormsg = "";
    }
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} method="post">
          <h1>Register</h1>
          <div className="form-group">
                        <label>Prénom</label> <br />
                            <input name="nom" value={this.state.email}  onChange={this.handleChange} type="text" placeholder="Votre prénom" />
                        
                    </div>

        
          <label>Mot de passe :</label> <br />
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Votre mot de passe"
          />
          <br />
          <label>confirmer mot de passe :</label>
          <br />{" "}
          <input
            type="text"
            value={this.state.repeatPassword}
            onChange={this.handleChange}
            placeholder="Votre mot de passe"
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
        <p>{this.errormsg}</p>

        <p className="forgot-password text-right">
          Already registered <a href="/login">log in?</a>
        </p>
      </div>
    );
  }

  // render() {
  //     const button = document.querySelector('button')
  //     if (this.state.password !== this.state.repeatPassword){
  //         button.disabled = true;
  //         this.errormsg = "les mots de passe ne correspondent pas"
  //     } else {
  //         button.disabled = false;
  //         this.errormsg = ""
  //     }
  //     return (
  //         <div className="card">
  //             <form onSubmit={this.handleSubmit} method="post">
  //                 <h3>Register</h3>

  //                 <div className="form-group">
  //                     <label>Email
  //                         <input name="email" value={this.state.email}  onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
  //                     </label>
  //                 </div>

  //                 <div className="form-group">
  //                     <label>Password
  //                         <input name="password" value={this.state.password}  onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
  //                     </label>
  //                 </div>
  //                 <div className="form-group">
  //                     <label>Password
  //                         <input name="repeatPassword" value={this.state.repeatPassword}  onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
  //                     </label>
  //                 </div>

  //                 <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Register</button>
  //             </form>

  //             <p>{this.errormsg}</p>

  //             <p className="forgot-password text-right">
  //                 Already registered <a href="/login">log in?</a>
  //             </p>

  //         </div>
  //     );
  // }
}
