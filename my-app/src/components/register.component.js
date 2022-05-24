import React, { Component, useState } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
            repeatPassword: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {


        this.setState(
            {[event.target.name] : event.target.value}
        );

        // const button = document.getElementById("submit_button")
        // if({[password]} !== this.state.repeatPassword){
        //     button.disabled = true;
        // } else {
        //     button.disabled = false;
        // }
        

    }

    handleSubmit(event) {
        alert('A email was submitted: ' + this.state.email + "\npassword = " + this.state.password  + "\nReapeat Password = " + this.state.repeatPassword);
        // alert('A email was submitted: ' + this.state);
        var logemail = this.state.email;
        var logpassword = this.state.password;
        var logrepeatPassword = this.state.repeatPassword;

        if (logpassword == logrepeatPassword) {
            //test de la sécurité du mot de passe

            //test si le mail est deja dans la base de données 

            //cryptage du mot de passe 

            // ajout du nouvel utilisateur dans la base de données
            var sql = "INSERT INTO login (email, password) VALUES (email, password)";

        } else  {
            alert("les deux mots de passe ne correspondent pas")
        }
        event.preventDefault();
    } 

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} method="post">
                    <h3>Register</h3>


                    <div className="form-group">
                        <label>Email
                            <input name="email" value={this.state.email}  onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password    
                            <input name="password" value={this.state.password}  onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Password
                            <input name="repeatPassword" value={this.state.repeatPassword}  onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Register</button>
                </form>

                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
                
            </div>
        );
    }
}