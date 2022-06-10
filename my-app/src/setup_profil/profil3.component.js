
import { Dimensions, View, Image } from "react-native";
import React, { Component } from "react";
import "./styles/styles.css";



const { width, height } = Dimensions.get("screen");

export default class secondProfil extends Component {





  // $('#multi').mdbRange({
  //   single: {
  //     active: true,
  //     multi: {
  //       active: true,
  //       rangeLength: 1
  //     },
  //   }
  // });
  constructor(props) {
    super(props);
    this.state = {
      anniversaire: "",
      sexe: "",
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
    var anniversaire = this.state.anniversaire;
    var sexe = this.state.sexe;

    //mise a jour du profil

    event.preventDefault();
  }

  render() {
    return (
      <div className="card">
        <div
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderTop: "5px solid #fff ",
              marginLeft: 360,
              marginRight: 20,
              width: 100,
              float: "left",
            }}
          ></div>
          <div
            style={{
              borderTop: "5px solid #fff ",
              marginLeft: 20,
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
        </form>

        <div className="form-group">
          <label>
            Localisation
            <input
              name="ville"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="votre ville"
            />
          </label>
          <label>
            <input
              name="postal"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Code postal"
            />
          </label>
          <select>
            <option value="q">recherche :</option>
            <option value="q">
              Moins de 1 kilomètres
            </option>
            <option value="q">
            Moins de 3 kilomètres
            </option>
            <option value="q">
            Moins de 5 kilomètres
            </option>
            <option value="q">
            plus de 5 kilomètres
            </option>
          </select>

          {/* <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/> */}
          {/* <form class="multi-range-field my-5 pb-5">Zone de recherche
  <input id="multi" class="multi-range" type="range" />
</form> */}

{/* <div class="container mt-3">
  <div class="multi-ranges-basic"></div>
<div id="multi-ranges-basic-value" class="mt-3">
  Value:
  <span class="d-flex flex-column">
    <div>First:</div>
    <div>Second:</div>
  </span>
</div>
</div> */}



        </div>
        <div>
          <label>
            Votre Age
            <input
              name="age"
              value={this.state.old}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="votre age"
            />
          </label>
          <select>
            <option value="0">recherche :</option>
            <option value="R1">
              plus ou moins 1 ans
            </option>
            <option value="R2">
            plus ou moins 3 ans
            </option>
            <option value="R3">
            plus ou moins 5 ans
            </option>
            <option value="R4">
              peu m'importe
            </option>
          </select>
        </div>
        <p className="forgot-password text-right">
          Déja enregistré(e) ? <a href="/login">Se connecter</a>
        </p>
      </div>
    );
  }
}
