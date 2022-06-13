import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login.component'
import Register from './components/register.component'
import App from "./main/App"
import Setup from "./setup_profil/setup"
import Chat from "./chat/chat"


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/setup" element={<Setup/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/logout" element={<Logout/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

function Logout() {
  deleteAllCookies();
  window.location.replace("/");
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
