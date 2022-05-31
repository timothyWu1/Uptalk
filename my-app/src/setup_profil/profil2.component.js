import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anniversaire: '',
            sexe: ''
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
        var anniversaire = this.state.anniversaire;
        var sexe = this.state.sexe;

            //mise a jour du profil

        event.preventDefault();
    } 

    render () {

        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}  method="post" >
                    <h1>Profil</h1>


                    <div className="form-group">
                        <label>sexe
                            <input name="nom" value={this.state.email}  onChange={this.handleChange} type="text" className="form-control" placeholder="Your firstname" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Firstname   
                            <input name="prenom" value={this.state.password}  onChange={this.handleChange} type="text" className="form-control" placeholder="Your lastname" />
                        </label>
                    </div>


                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button" disabled={this.buttonDisabled}>Register</button>
                </form>



                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
                
            </div>
        );
    }
}
