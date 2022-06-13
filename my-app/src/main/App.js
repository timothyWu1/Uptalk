import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Match from "./match.component"


function App() {
  if (getCookie("userId" !== null)){
    return (
      <div className="App">
          <Match/>
      </div>
    );
  } else {
    return (
        <div>main page</div>
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
