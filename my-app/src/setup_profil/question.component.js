import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default class Question extends Component {
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



    return (
      
        <div>
          <h1>Decrivez vous :</h1>

          <div>
            <select>
                <option value="q">question 1 :</option>
              <option value="q">Si vous devez vous décrire avec trois objets, lesquels seront-ils ?</option>
              <option value="q">Selon vous, qu'elle est la chose essentielle dans une relation durable?</option>
              <option value="q">Quelle est la caractéristique qui vous attire le plus chez votre partenaire ?</option>
              <option value="q">Quelle est la chose a propos de vous dont votre partenaire doit absolument savoir avant même de discuter avec vous ?</option>
            </select>
            <input name="rep1" value={this.state.answer}  onChange={this.handleChange} type="text" className="form-control" placeholder="Votre réponse" />
          </div>
          <div>
            <select>
                <option value="q">question 2 :</option>
              <option value="q">Si vous devez vous décrire avec trois objets, lesquels seront-ils ?</option>
              <option value="q">Selon vous, qu'elle est la chose essentielle dans une relation durable?</option>
              <option value="q">Quelle est la caractéristique qui vous attire le plus chez votre partenaire ?</option>
              <option value="q">Quelle est la chose a propos de vous dont votre partenaire doit absolument savoir avant même de discuter avec vous ?</option>
            </select>
            <input name="rep2" value={this.state.answer}  onChange={this.handleChange} type="text" className="form-control" placeholder="Votre réponse" />
          </div>
          <div>
            <select>
                <option value="q">question 3 :</option>
              <option value="q">Si vous devez vous décrire avec trois objets, lesquels seront-ils ?</option>
              <option value="q">Selon vous, qu'elle est la chose essentielle dans une relation durable?</option>
              <option value="q">Quelle est la caractéristique qui vous attire le plus chez votre partenaire ?</option>
              <option value="q">Quelle est la chose a propos de vous dont votre partenaire doit absolument savoir avant même de discuter avec vous ?</option>
            </select>
            <input name="rep3" value={this.state.answer}  onChange={this.handleChange} type="text" className="form-control" placeholder="Votre réponse" />
          </div>

      </div>
    );
  }
}
