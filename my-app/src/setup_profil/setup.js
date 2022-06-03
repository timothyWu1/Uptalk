import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Profil from "./profil.component"
import Profil2 from "./profil2.component"
import Biographie from "./biographie.component"
import Interet from "./interet.component"
import Question from "./question.component"


export default function Setup() {
  var returned
  //test si le profil n'est pas configuré

  const [count, setCount] = useState(0);
  
  returned = [<Profil/>, <Profil2/>, <Biographie/>, <Interet/>, <Question/>]

  //test si la bio est configuré
  // returned = <Biographie/>

  //test si 
 

  return (
    <div className="card">

      <div>
          <div style={{ borderTop: "5px solid #000 ", marginLeft: 350, marginRight: 20, width:100, float:"left" }}></div>
          <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
          <div style={{ borderTop: "5px solid #fff ", marginLeft: 20, marginRight: 20, width:100, float:"left" }}></div>
      </div>

      <div>

          <button onClick={() => setCount(count - 1)} className="btn btn-dark btn-lg btn-block"  id="submit_button">precedent</button>


          <button onClick={() => setCount(count + 1)} className="btn btn-dark btn-lg btn-block" id="submit_button">Suivant</button>


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
