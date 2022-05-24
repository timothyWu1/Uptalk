import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Profil from "./profil.component"
import Biographie from "./biographie.component"

export default function Setup() {
  var returned
  //test si le profil n'est pas configuré
  
  returned = <Profil/>
  //test si la bio est configuré
  returned = <Biographie/>


  return (
    returned
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Setup/>);
