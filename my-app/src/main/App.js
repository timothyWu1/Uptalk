import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Match from "./match.component"


function App() {

  console.log(getCookie("userId"))
  if (getCookie("userId") !== ""){
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
          <div class="container-fluid">
            <div>
              <a href="/chat" className="login_button btn btn-primary" >Messagerie</a>
            </div>
            <div>
              <a href="/setup" className=" btn btn-primary" >Profil</a>
            </div>
            <div>
              <a href="/logout" className=" btn btn-primary" >deconnexion</a>
            </div>
          </div>
        </nav>
          <Match/>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <a href="/login" role="button" className="login_button btn btn-primary" >Connexion</a>
        </div>
        <div className="register_button">
          <a href="/register" role="button" className=" btn btn-primary" >S'inscrire sur Uptalk</a>
        </div>
        <div className="card desc">
          Description du site
        </div>
      </div>
    )
  } 
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default App;
