import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biographie : '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState(
            {[event.target.name] : event.target.value}
        );

    }

    handleSubmit(event) {
        var biographie = this.state.nom;
        //vérification de la biographie

        //ajout dans la base de données

        event.preventDefault();
    } 

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}  method="post" >
                    <h3>Biographie</h3>


                    <div className="form-group">
                        <textarea class="form-control" placeholder="Biographie" id="floatingTextarea2" ></textarea>
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