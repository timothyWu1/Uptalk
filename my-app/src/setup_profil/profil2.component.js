import { Dimensions, View, Image } from "react-native";
import React, { Component } from "react";
import "./styles/styles.css";
const { width, height } = Dimensions.get("screen");

export default class secondProfil extends Component {
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
              borderTop: "5px solid #000 ",
              marginLeft: 20,
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

          <h1>Profil</h1>

          <div className="form-group">
            <label>
              Date de naissance
              <input
                name="anniversaire"
                value={this.state.anniversaire}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="date de naissance"
              />
            </label>
          </div>
          <div className="container">
            <div className="form-group">
              <h1>Quel est votre sexe ?</h1>
            </div>

            <View
              style={{
                width: width * 0.8,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("./asset/homme.png")}
                style={{ width: "30%", height: 400 }}
              />

              <Image
                source={require("./asset/femme.png")}
                style={{ width: "30%", height: 400 }}
              />

              <Image
                source={require("./asset/other.png")}
                style={{ width: "30%", height: 400 }}
              />
            </View>
            <div>
              <div
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input type="radio" name="gender" value="men" id="men" />
                <label for="homme">Homme</label>

                <input type="radio" name="gender" value="women" id="women" />
                <label for="femme">Femme</label>

                <input type="radio" name="gender" value="other" id="other" />
                <label for="nb">Autres</label>
              </div>
            </div>
          </div>
        </form>

        <p className="forgot-password text-right">
          Already registered <a href="/login">log in?</a>
        </p>
      </div>
    );
  }
}
