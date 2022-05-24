import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            prenom: '',
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
        var nom = this.state.nom;
        var prenom = this.state.prenom;
        var anniversaire = this.state.anniversaire;
        var sexe = this.state.sexe;

            //mise a jour du profil

        event.preventDefault();
    } 

    render() {

        if (this.state.nom.length < 2 || this.state.nom.length>25 || this.state.prenom.length < 2 || this.state.prenom.length>25 || this.state.anniversaire.length !== 10){
            this.buttonDisabled = true;
        } else {
            this.buttonDisabled = false;
        }

        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}  method="post" >
                    <h3>Profil setup</h3>


                    <div className="form-group">
                        <label>nom
                            <input name="nom" value={this.state.email}  onChange={this.handleChange} type="text" className="form-control" placeholder="Votre nom" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>prenom    
                            <input name="prenom" value={this.state.password}  onChange={this.handleChange} type="text" className="form-control" placeholder="Votre prenom" />
                        </label>
                    </div>

                    <div class="form-check form-switch">
                        <p>Homme
                            <input name="sexe" value={this.state.sexe} onChange={this.handleChange} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Femme</label>
                        </p>
                    </div>

                    <label for="birthday">Birthday:
                    <input value={this.state.password}  onChange={this.handleChange} name='anniversaire' type="date" id="anniversaire" ></input>
                    </label>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button" disabled={this.buttonDisabled}>Register</button>
                </form>

                {this.state.anniversaire.length}


                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
                
            </div>
        );
    }
}