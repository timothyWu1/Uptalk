import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login.component'
import Register from './components/register.component'
import App from "./App"
import Setup from "./setup_profil/setup"
import secondProfil from './setup_profil/profil2.component';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/setup" element={<Setup/>} />
        <Route path="/setup2" element={<secondProfil/>} />
        {/* <Route path="/setup3" element={<Profil3/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
