import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

export default class Interet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
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
    var nom = this.state.nom;
    var prenom = this.state.prenom;

    //mise a jour du profil

    event.preventDefault();
  }

  render() {
    const interetList = [
        { label: "Animaux", value: 1 },
        { label: "Bénévolat", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Cryptomonnaie", value: 4 },
        { label: "Haltérophilie", value: 5 },
        { label: "Jeux vidéo", value: 6 },
      ];
    return (
      <div className="card">
        <div>
          <div
            style={{
              borderTop: "5px solid #fff ",
              marginLeft: 450,
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

          <h1>Vos centres d'intêret :</h1>

          <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Select options={ interetList } />
      </div>
      <div className="col-md-4">
        <Select options={ interetList } />
      </div>
      <div className="col-md-4">
        <Select options={ interetList } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>

        </form>
      </div>
    );
  }
}
