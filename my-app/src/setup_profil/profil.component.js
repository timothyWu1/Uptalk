import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            prenom: '',
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

            //mise a jour du profil

        event.preventDefault();
    }

    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 8
                }}
            />
        );

        if (this.state.nom.length < 2 || this.state.nom.length>25 || this.state.prenom.length < 2 || this.state.prenom.length>25 || this.state.anniversaire.length !== 10){
            this.buttonDisabled = true;
        } else {
            this.buttonDisabled = false;
        }

        return (

            <div className="card">
                <div>
                    <div style={{ borderTop: "5px solid #000 ", marginLeft: 350, marginRight: 20, width:100, float:"left" }}></div>
                    <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
                    <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
                </div>

                <form onSubmit={this.handleSubmit}  method="post" >

                <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">Suivant</button>

                    <button type="submit" className="btn btn-dark btn-lg btn-block"  id="submit_button">precedent</button>

                    <h1>Création de profil</h1>

                    <div className="form-group">
                        <label>Votre prenom
                            <input name="nom" value={this.state.lastname}  onChange={this.handleChange} type="text" className="form-control" placeholder="prénom" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Votre nom
                            <input name="prenom" value={this.state.firstname}  onChange={this.handleChange} type="text" className="form-control" placeholder="nom" />
                        </label>
                    </div>

                </form>

            </div>
        );
    }
}

