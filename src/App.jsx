import React from "react"

//add bootstrap
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';

//importing components
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

//retrieve the value of "code" from the current URL.
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  {return code ? <Dashboard code={code} /> : <Login />}
}

export default App;
