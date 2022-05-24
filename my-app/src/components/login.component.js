import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
        }

        this.buttonDisabled = true;
        this.errormsg = "";

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState(
            {[event.target.name] : event.target.value}
        );

    }

    handleSubmit(event) {
        alert('A email was submitted: ' + this.state.email + "\npassword = " + this.state.password);
        // alert('A email was submitted: ' + this.state);
        var email = this.state.email;
        var password = this.state.password;

            //blockage du bruteforce 

            //vérification que le mail existe dans la base de données

            //decryptage du mot de passe 

            // vérification du mot de passe 

            //connexion de l'utilisateur

            //redirection

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

                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Register</button>
                </form>

                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
                
            </div>
        );
    }
}