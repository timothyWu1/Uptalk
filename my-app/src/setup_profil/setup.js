import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Profil from "./profil.component"
import Profil2 from "./profil2.component"
import Biographie from "./biographie.component"
import Interet from "./interet.component"
import Question from "./question.component"
import Recherche from "./profil3.component"


export default function Setup() {
  var returned
  //test si le profil n'est pas configuré

  const [count, setCount] = useState(0);

  var navbar = [];
  
  returned = [<Profil/>, <Profil2/>, <Biographie/>, <Interet/>, <Question/>, <Recherche/>]

  for (var i = 0; i < returned.length; i++) {
    if(i === count){
      navbar.push(<div style={{ borderTop: "5px solid #000 ", marginLeft: 10, marginRight: 10, width:50, float:"left" }}></div>)
    } else {
      navbar.push(<div style={{ borderTop: "5px solid #fff ", marginLeft: 10, marginRight: 10, width:50, float:"left" }}></div>)
    }
  }
  //test si la bio est configuré
  // returned = <Biographie/>

  var buttonBack
  var buttonFor

  if (count > 0){
    buttonBack = <button onClick={() => setCount(count - 1)} className="btn btn-dark btn-lg btn-block"  id="submit_button">precedent</button>
  } else{
    buttonBack = <button onClick={() => setCount(count - 1)} className="btn btn-dark btn-lg btn-block"  id="submit_button" disabled>precedent</button>
  }

  if (count < returned.length -1){
    buttonFor = <button onClick={() => setCount(count + 1)} className="btn btn-dark btn-lg btn-block" id="submit_button">Suivant</button>
  } else{
    buttonFor = <button onClick={() => setCount(count + 1)} className="btn btn-dark btn-lg btn-block" id="submit_button" disabled>Suivant</button>
  }
  //test si 
 

  return (
    <div className="card profil-card">

      <div className="nav">
          {navbar}
      </div>

      <div className="page-select">
        <div className="button">
          {buttonBack}
        </div>
        <div className="button">
          {buttonFor}
        </div>
      </div>
      {returned[count]}
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Setup/>);
