import React, { Component } from "react";



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

        if (this.state.nom.length < 2 || this.state.nom.length>25 || this.state.prenom.length < 2 || this.state.prenom.length>25 || this.state.anniversaire.length !== 10){
            this.buttonDisabled = true;
        } else {
            this.buttonDisabled = false;
        }

        return (
            
            <div className="card">

                <form onSubmit={this.handleSubmit}  method="post" >
                {/* <Button
    variant="contained"
    color="default"         
    startIcon={<ArrowBackIcon />}
  >button</Button> */}
                    <h1>Profil</h1>


                    <div className="form-group">
                        <label>Lastname
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



                
            </div>
        );
    }
}