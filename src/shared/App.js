import React from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import { Route,Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={SignUp}/>
      <Route path='/' exact component={Home}/>
      <Route path='/detail' exact component={Detail}/>
      <Route path='/write' exact component={Write}/>
    </React.Fragment>
  );
}

export default App;
